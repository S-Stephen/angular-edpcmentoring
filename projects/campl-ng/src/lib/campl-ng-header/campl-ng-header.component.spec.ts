import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CamplNgHeaderComponent } from "./campl-ng-header.component";

describe("CamplNgHeaderComponent", () => {
  let component: CamplNgHeaderComponent;
  let fixture: ComponentFixture<CamplNgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgHeaderComponent]
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
});
