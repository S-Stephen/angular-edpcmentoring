import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";
import { CamplNgTitlenavComponent } from "./campl-ng-titlenav.component";

@Component({
  selector: "campl-ng-nav",
  template: ""
})
class MockCamplNgNavComponent {}

describe("CamplNgTitlenavComponent", () => {
  let component: CamplNgTitlenavComponent;
  let fixture: ComponentFixture<CamplNgTitlenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgTitlenavComponent, MockCamplNgNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgTitlenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
