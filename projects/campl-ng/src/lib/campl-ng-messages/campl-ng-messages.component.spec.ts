import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { CamplNgMessagesComponent } from "./campl-ng-messages.component";

import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { RouterTestingModule } from "@angular/router/testing"; //spy

describe("CamplNgMessagesComponent", () => {
  let component: CamplNgMessagesComponent;
  let fixture: ComponentFixture<CamplNgMessagesComponent>;
  let notification_panel: DebugElement;
  let close_button: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CamplNgMessagesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CamplNgMessagesComponent);
    notification_panel = fixture.debugElement.query(
      By.css(".campl-notifications-panel")
    );
    component = fixture.componentInstance;
    component.message_log = ["Test Message 1"];
    component.show_messages = false;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("messages hidden when close clicked", fakeAsync(() => {
    //spyOn(component, "hideMessages"); //if you spy the function will not be called!

    //find our panel
    let panel_select = By.css(".campl-notifications-panel");
    let close_btn_select = By.css(".campl-close-panel");

    component.toggleMessages(); // should now be set to true
    fixture.detectChanges(); // this can timeout if no changes occur?

    // one way of triggering event
    // this should not be visible!!
    console.log("in the test");

    // The panel is displayed
    expect(fixture.debugElement.query(panel_select)).not.toBeNull(); //

    expect(fixture.debugElement.query(close_btn_select)).not.toBeNull(); //

    //calling the nativeElement.click() event causes the tets to re-run ?inside the tests?
    //close_button.nativeElement.click();

    fixture.debugElement
      .query(close_btn_select)
      .triggerEventHandler("click", { button: 0 });
    tick();
    //alternatives:
    //component.hideMessages();
    //component.show_messages = false;

    fixture.detectChanges(); // this can timeout if no changes occur?

    // the panel is hidden
    expect(fixture.debugElement.query(panel_select)).toBeNull();
  }));
});
