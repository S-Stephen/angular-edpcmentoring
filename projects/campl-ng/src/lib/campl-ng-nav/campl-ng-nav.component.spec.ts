import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CamplNgNavComponent } from "./campl-ng-nav.component";

describe("CamplNgNavComponent", () => {
  let component: CamplNgNavComponent;
  let fixture: ComponentFixture<CamplNgNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
