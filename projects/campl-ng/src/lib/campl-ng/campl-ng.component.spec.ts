import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from "@angular/core";
import { CamplNgComponent } from "./campl-ng.component";
import { CamplNgTitlenavComponent } from "../campl-ng-titlenav/campl-ng-titlenav.component";
import { of } from "rxjs/internal/observable/of";
import { NavMenu } from "../models/nav-menu";
import { Observable, ReplaySubject } from "rxjs";
import { CamplNgCapabilitiesService } from "../services/campl-ng-capabilities.service";

// Router outlet must be included in the parent app
@Component({
  selector: "router-outlet",
  template: ""
})
class MockRouterOutletComponent {}

@Component({
  selector: "campl-ng-header",
  template: ""
})
class MockCamplNgHeaderComponent {}

@Component({
  selector: "campl-ng-titlenav",
  template: ""
})
class MockCamplNgTitlenavComponent {
  @Input()
  nav_menu$: Observable<NavMenu>;
  @Input()
  nav_menu: NavMenu;
}

@Component({
  selector: "campl-ng-messages",
  template: ""
})
class MockCamplNgMessagesComponent {}

@Component({
  selector: "campl-ng-localfooter",
  template: ""
})
class MockCamplNgLocalfooterComponent {}

@Component({
  selector: "campl-ng-footer",
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
