import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CamplNgContentComponent } from "./campl-ngx-content.component";

describe("CamplNgContentComponent", () => {
  let component: CamplNgContentComponent;
  let fixture: ComponentFixture<CamplNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgContentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
