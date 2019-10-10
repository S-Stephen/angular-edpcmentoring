import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CamplNgNavComponent } from "./campl-ng-nav.component";

import { of } from "rxjs";
import { NavMenu } from "../models/nav-menu";

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

    // mock an input to the component
    let navm = {} as NavMenu;
    component.nav_menu$ = of(navm);

    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
