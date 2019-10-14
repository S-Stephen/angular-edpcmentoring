import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from "@angular/core/testing";

import { CamplNgHeaderComponent } from "./campl-ng-header.component";

import { CamplNgQuicklinksComponent } from "../campl-ng-quicklinks/campl-ng-quicklinks.component";

import { CamplService } from "../services/campl.service";

import { Injectable } from "@angular/core";

import { RouterTestingModule } from "@angular/router/testing"; //spy

import { By } from "@angular/platform-browser";

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

describe("CamplNgHeaderComponent", () => {
  let component: CamplNgHeaderComponent;
  let fixture: ComponentFixture<CamplNgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CamplNgHeaderComponent, CamplNgQuicklinksComponent],
      providers: [{ provide: CamplService, useClass: MockCamplService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  it("should display the menu when click on menu icon (#open-menu) close on click 'Home'", fakeAsync(() => {
    let menu_select = By.css("#open-menu");
    let global_nav_select = By.css(".campl-global-navigation");
    let home_link_select = By.css(".campl-home-link-container a");

    expect(fixture.debugElement.query(menu_select)).toBeTruthy();

    // https://stackoverflow.com/questions/41811609/test-freezes-when-expectresult-tobenull-fails-test-angular-2-jasmine
    // menu currently not shown
    var result = fixture.debugElement.query(global_nav_select);
    expect(result === null).toBeTruthy();

    // click on link see menu
    fixture.debugElement
      .query(menu_select)
      .triggerEventHandler("click", { button: 0 });
    tick();
    fixture.detectChanges();

    expect(fixture.debugElement.query(global_nav_select)).not.toBeNull();

    // click 'Home' and we should close

    expect(fixture.debugElement.query(home_link_select)).toBeTruthy();
    fixture.debugElement
      .query(home_link_select)
      .triggerEventHandler("click", { button: 0 });
    tick();
    fixture.detectChanges();

    //back to menu currently not shown
    var result = fixture.debugElement.query(global_nav_select);
    expect(result === null).toBeTruthy();
  }));
});
