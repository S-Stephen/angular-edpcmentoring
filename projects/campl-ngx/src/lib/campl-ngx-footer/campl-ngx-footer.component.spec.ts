import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CamplNgFooterComponent } from "./campl-ngx-footer.component";

describe("CamplNgFooterComponent", () => {
  let component: CamplNgFooterComponent;
  let fixture: ComponentFixture<CamplNgFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
