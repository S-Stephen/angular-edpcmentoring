import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LibCamplNgComponent } from "./campl-ngx.component";

describe("CamplComponent", () => {
  let component: LibCamplNgComponent;
  let fixture: ComponentFixture<LibCamplNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LibCamplNgComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibCamplNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
