import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";
import { CamplNgComponent } from "./campl-ng.component";

// Router outlet must be included in the parent app
@Component({
  selector: "router-outlet",
  template: ""
})
class MockRouterOutletComponent {}

@Component({
  selector: "campl-ng-header",
  template: ""
})
class MockCamplNgHeaderComponent {}

@Component({
  selector: "campl-ng-titlenav",
  template: ""
})
class MockCamplNgTitlenavComponent {}

@Component({
  selector: "campl-ng-localfooter",
  template: ""
})
class MockCamplNgLocalfooterComponent {}

@Component({
  selector: "campl-ng-footer",
  template: ""
})
class MockCamplNgFooterComponent {}

describe("CamplNgComponent", () => {
  let component: CamplNgComponent;
  let fixture: ComponentFixture<CamplNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockRouterOutletComponent,
        CamplNgComponent,
        MockCamplNgFooterComponent,
        MockCamplNgLocalfooterComponent,
        MockCamplNgTitlenavComponent,
        MockCamplNgHeaderComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
