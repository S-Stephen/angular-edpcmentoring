import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { CamplNgxMessagesComponent } from "./campl-ngx-messages.component";

import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { RouterTestingModule } from "@angular/router/testing"; //spy

describe("CamplNgxMessagesComponent", () => {
  let component: CamplNgxMessagesComponent;
  let fixture: ComponentFixture<CamplNgxMessagesComponent>;
  let notification_panel: DebugElement;
  let close_button: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CamplNgxMessagesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CamplNgxMessagesComponent);
    notification_panel = fixture.debugElement.query(
      By.css(".campl-notifications-panel")
    );
    component = fixture.componentInstance;
    component.message_log = [{value:"Test Message 1",type:'alert'}];
    component.show = {'alert':false};
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

    component.toggleMessages('alert'); // should now be set to true
    fixture.detectChanges(); // this can timeout if no changes occur?

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
