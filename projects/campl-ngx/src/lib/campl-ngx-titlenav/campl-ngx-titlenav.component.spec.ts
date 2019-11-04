import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from "@angular/core";
import { CamplNgxTitlenavComponent } from "./campl-ngx-titlenav.component";
import { NavMenu } from "../models/nav-menu";
import { Observable, of, ReplaySubject } from "rxjs";
import { CamplService } from "../services/campl.service";
import { CamplConfigService } from "../services/campl-config.service";
import { CamplNgxNavComponent } from "../campl-ngx-nav/campl-ngx-nav.component";
import { CamplNgxCapabilitiesService } from "../services/campl-ngx-capabilities.service";

/**
 *  @Component({
  selector: "campl-ngx-nav",
  template: ""
})
class CamplNgxNavComponent {
  @Input()
  nav_menu$: Observable<NavMenu>;
  public nav_menu: NavMenu;
}
*/

@Component({
  selector: "campl-ngx-localnav-menu",
  template: "<p>Mock localnav</p>"
})
class MocklocalNavComponent {
  @Input() menu: any;
}

describe("CamplNgxTitlenavComponent", () => {
  let component: CamplNgxTitlenavComponent;
  let fixture: ComponentFixture<CamplNgxTitlenavComponent>;
  let camplConfig: any = {};
  let fakeCapabilities;
  let capSubject = new ReplaySubject(1);

  beforeEach(async(() => {
    fakeCapabilities = {
      modernizrSource: capSubject.asObservable()
    };
    TestBed.configureTestingModule({
      declarations: [
        CamplNgxTitlenavComponent,
        CamplNgxNavComponent,
        MocklocalNavComponent
      ],
      providers: [
        CamplService,
        {
          provide: CamplConfigService,
          useValue: camplConfig
        },
        { provide: CamplNgxCapabilitiesService, useValue: fakeCapabilities }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    capSubject.next({ supported: true });
    fixture = TestBed.createComponent(CamplNgxTitlenavComponent);
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
