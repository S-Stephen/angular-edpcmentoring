import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { By } from "@angular/platform-browser";
import { CamplNgxQuicklinksComponent } from "./campl-ngx-quicklinks.component";
import {
  Component,
  Injectable,
  DebugElement,
  Directive,
  Input,
  HostListener
} from "@angular/core";

import { CamplService } from "../services/campl.service";

// See https://angular.io/guide/testing#components-with-routerlink
// to prevent our tests failing 'routerLink' attribute unknown
@Directive({
  selector: "[routerLink]"
})
export class RouterLinkDirectiveStub {
  @Input("routerLink") linkParams: any;
  navigatedTo: any = null;

  @HostListener("click")
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

// Create a parent component, to hold quicklinks in
@Component({
  selector: "test-ql",
  template: `
    <div>
      <div class="testele">Some div to click on</div>
      <campl-ngx-quicklinks></campl-ngx-quicklinks>
    </div>
  `
})
class TestQuicklinks {
  someCode() {
    console.log("clicked container element");
  }
}

@Injectable()
class MockCamplService {
  private config: any;
  public getConfig(): any {
    return (this.config = [
      { link: "testlink1", label: "label 1" },
      { link: "testlink2", label: "label 2" },
      { link: "testlink3", label: "label 3" }
    ]);
  }
}

describe("CamplNgxQuicklinksComponent", () => {
  let component: CamplNgxQuicklinksComponent;
  let fixture: ComponentFixture<CamplNgxQuicklinksComponent>;
  let fixture_outer: ComponentFixture<TestQuicklinks>;
  let linkToggle: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestQuicklinks,
        CamplNgxQuicklinksComponent,
        RouterLinkDirectiveStub
      ],
      providers: [{ provide: CamplService, useClass: MockCamplService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxQuicklinksComponent);
    fixture_outer = TestBed.createComponent(TestQuicklinks);
    component = fixture.componentInstance;
    linkToggle = fixture.debugElement.query(By.css(".campl-quicklinks"));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should toggle list on click", fakeAsync(() => {
    let quicklinks_list_select = By.css(".campl-quicklinks-list");
    // test close-open-close
    // hidden at the start

    // expect(fixture.debugElement.query(quicklinks_list_select)).toBeNull();
    // https://stackoverflow.com/questions/41811609/test-freezes-when-expectresult-tobenull-fails-test-angular-2-jasmine
    var result = fixture.debugElement.query(quicklinks_list_select);
    expect(result === null).toBeTruthy();

    // after clicking the menu it should be available
    linkToggle.triggerEventHandler("click", { button: 0 });
    tick();
    fixture.detectChanges();

    expect(fixture.debugElement.query(quicklinks_list_select)).not.toBeNull();

    // after clicking the open menu it should be removed
    linkToggle.triggerEventHandler("click", { button: 0 });
    tick();
    fixture.detectChanges();

    // list no longer presented
    var result = fixture.debugElement.query(quicklinks_list_select);
    expect(result === null).toBeTruthy();

    // open again an we will test that the list closes if a user clicks elsewhere on the page:
  }));

  it("should close menu when click elsewhere on page", fakeAsync(() => {
    // test open, click elsewhere close
    // fime/complete - @Hostlistener not capturing of eelement click

    let quicklinks_list_select = By.css(".campl-quicklinks-list");
    let outer_element = By.css(".testele");
    // test close-open-close(by external element)
    // hidden at the start

    // expect(fixture.debugElement.query(quicklinks_list_select)).toBeNull();
    // https://stackoverflow.com/questions/41811609/test-freezes-when-expectresult-tobenull-fails-test-angular-2-jasmine
    var result = fixture.debugElement.query(quicklinks_list_select);
    expect(result === null).toBeTruthy();

    // after clicking the menu it should be available
    linkToggle.triggerEventHandler("click", { button: 0 });
    tick();
    fixture.detectChanges();

    expect(fixture.debugElement.query(quicklinks_list_select)).not.toBeNull();

    // the outer element is visible:
    expect(fixture_outer.debugElement.query(outer_element)).not.toBeNull();

    //const event = new Event("click", { bubbles: true });
    // This doesn't seemed to trigger or bubble up to the document and
    // therefore not captured by the @HostListener on the test element
    //fixture_outer.debugElement
    //  .query(outer_element)
    //  .triggerEventHandler("click", { bubbles: true });

    // https://stackoverflow.com/questions/49878559/how-to-test-document-clicks-in-unit-tests-in-angular
    // NB we should refactor without the outer Component now!!
    document.dispatchEvent(new MouseEvent("click"));

    tick();
    fixture.detectChanges();

    var result = fixture.debugElement.query(quicklinks_list_select);
    expect(result === null).toBeTruthy();
  }));

  xit("should follow menu link on click", () => {
    // TODO test user can navigate to external links open close
  });
});
