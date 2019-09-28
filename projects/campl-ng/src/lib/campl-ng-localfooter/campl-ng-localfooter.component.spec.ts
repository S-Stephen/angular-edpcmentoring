import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CamplNgLocalfooterComponent } from "./campl-ng-localfooter.component";

describe("CamplNgLocalfooterComponent", () => {
  let component: CamplNgLocalfooterComponent;
  let fixture: ComponentFixture<CamplNgLocalfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgLocalfooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgLocalfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
