import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from "@angular/core";
import { CamplNgComponent } from "./campl-ngx-app.component";
import { CamplNgTitlenavComponent } from "../campl-ngx-titlenav/campl-ngx-titlenav.component";
import { of } from "rxjs/internal/observable/of";
import { NavMenu } from "../models/nav-menu";
import { Observable, ReplaySubject } from "rxjs";
import { CamplNgCapabilitiesService } from "../services/campl-ngx-capabilities.service";

// Router outlet must be included in the parent app
@Component({
  selector: "router-outlet",
  template: ""
})
class MockRouterOutletComponent {}

@Component({
  selector: "campl-ngx-header",
  template: ""
})
class MockCamplNgHeaderComponent {}

@Component({
  selector: "campl-ngx-titlenav",
  template: ""
})
class MockCamplNgTitlenavComponent {
  @Input()
  nav_menu$: Observable<NavMenu>;
  @Input()
  nav_menu: NavMenu;
}

@Component({
  selector: "campl-ngx-messages",
  template: ""
})
class MockCamplNgMessagesComponent {}

@Component({
  selector: "campl-ngx-localfooter",
  template: ""
})
class MockCamplNgLocalfooterComponent {}

@Component({
  selector: "campl-ngx-footer",
  template: ""
})
class MockCamplNgFooterComponent {}

describe("CamplNgComponent", () => {
  let component: CamplNgComponent;
  let fixture: ComponentFixture<CamplNgComponent>;
  let fakeCapabilities;
  let capSubject = new ReplaySubject(1);

  beforeEach(async(() => {
    fakeCapabilities = {
      modernizrSource: capSubject.asObservable(),
      queryClient: Function
    };
    TestBed.configureTestingModule({
      declarations: [
        MockRouterOutletComponent,
        CamplNgComponent,
        MockCamplNgFooterComponent,
        MockCamplNgLocalfooterComponent,
        MockCamplNgTitlenavComponent,
        MockCamplNgHeaderComponent,
        MockCamplNgMessagesComponent
      ],
      providers: [
        { provide: CamplNgCapabilitiesService, useValue: fakeCapabilities }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    capSubject.next({ supported: true });
    fixture = TestBed.createComponent(CamplNgComponent);
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
