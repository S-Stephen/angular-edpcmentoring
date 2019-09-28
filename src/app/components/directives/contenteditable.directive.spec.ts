import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ContenteditableDirective } from "./contenteditable.directive";

// Create a component that uses this directive;
// This component will test that the updated element value is returned
@Component({
  selector: "test-content-editable",
  template:
    "<div menContenteditable contenteditable='true' (content)='updateContent($event)' [innerHTML]='defaultcontent'></div>"
})
class TestContentEditable {
  defaultcontent: string = "test content";
  newcontent: string = "";
  updateContent(newcontent: string) {
    console.log("new value set");
    this.newcontent = newcontent;
  }
}

describe("ContenteditableDirective", () => {
  let editEl: DebugElement;
  let component: TestContentEditable;
  let fixture: ComponentFixture<TestContentEditable>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestContentEditable, ContenteditableDirective]
    });
    fixture = TestBed.createComponent(TestContentEditable);
    component = fixture.componentInstance;
  });

  it("will be set with the default value, and emit updated value", () => {
    let newvalue = "new value";
    editEl = fixture.debugElement.query(By.css("div"));
    fixture.detectChanges();

    //editEl.nativeElement.innerHTML = "new value";
    //tests set with the default value
    expect(editEl.nativeElement.innerHTML).toBe(
      component.defaultcontent,
      "Test div initialized with the default value"
    );
    editEl.triggerEventHandler("onclick", null);

    // change our innerHTML value
    editEl.nativeElement.innerHTML = newvalue;

    // on blur our directive emmits the innerHTML valueback to the parent
    editEl.triggerEventHandler("blur", null);
    fixture.detectChanges();
    expect(component.newcontent).toBe(
      newvalue,
      "Component has returned/emitted the new value"
    );
  });
});
