import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from "@angular/core";
import { CamplNgTitlenavComponent } from "./campl-ng-titlenav.component";
import { NavMenu } from "../models/nav-menu";
import { Observable, of } from "rxjs";
import { CamplService } from "../services/campl.service";
import { CamplConfigService } from "../services/campl-config.service";
import { CamplNgNavComponent } from "../campl-ng-nav/campl-ng-nav.component";

/**
 *  @Component({
  selector: "campl-ng-nav",
  template: ""
})
class CamplNgNavComponent {
  @Input()
  nav_menu$: Observable<NavMenu>;
  public nav_menu: NavMenu;
}
*/

describe("CamplNgTitlenavComponent", () => {
  let component: CamplNgTitlenavComponent;
  let fixture: ComponentFixture<CamplNgTitlenavComponent>;
  let camplConfig: any = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgTitlenavComponent, CamplNgNavComponent],
      providers: [
        CamplService,
        {
          provide: CamplConfigService,
          useValue: camplConfig
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgTitlenavComponent);
    component = fixture.componentInstance;
    // this needs to be set so the template can pass it 'down'
    let navm = {} as NavMenu;
    component.nav_menu$ = of(navm);
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
