import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { CamplNgxComponent } from './campl-ngx-app.component';
import { CamplNgxTitlenavComponent } from '../campl-ngx-titlenav/campl-ngx-titlenav.component';
import { of } from 'rxjs/internal/observable/of';
import { NavMenu } from '../models/nav-menu';
import { Observable, ReplaySubject } from 'rxjs';
import { CamplNgxCapabilitiesService } from '../services/campl-ngx-capabilities.service';

// Router outlet must be included in the parent app
@Component({
  selector: 'campl-router-outlet',
  template: ''
})
class MockRouterOutletComponent {}

@Component({
  selector: 'campl-ngx-header',
  template: ''
})
class MockCamplNgxHeaderComponent {}

@Component({
  selector: 'campl-ngx-titlenav',
  template: ''
})
class MockCamplNgxTitlenavComponent {
  @Input()
  nav_menu$: Observable<NavMenu>;
  @Input()
  nav_menu: NavMenu;
}

@Component({
  selector: 'campl-ngx-messages',
  template: ''
})
class MockCamplNgxMessagesComponent {}

@Component({
  selector: 'campl-ngx-localfooter',
  template: ''
})
class MockCamplNgxLocalfooterComponent {}

@Component({
  selector: 'campl-ngx-footer',
  template: ''
})
class MockCamplNgxFooterComponent {}

describe('CamplNgxComponent', () => {
  let component: CamplNgxComponent;
  let fixture: ComponentFixture<CamplNgxComponent>;
  let fakeCapabilities;
  const capSubject = new ReplaySubject(1);

  beforeEach(async(() => {
    fakeCapabilities = {
      modernizrSource: capSubject.asObservable(),
      queryClient: Function
    };
    TestBed.configureTestingModule({
      declarations: [
        MockRouterOutletComponent,
        CamplNgxComponent,
        MockCamplNgxFooterComponent,
        MockCamplNgxLocalfooterComponent,
        MockCamplNgxTitlenavComponent,
        MockCamplNgxHeaderComponent,
        MockCamplNgxMessagesComponent
      ],
      providers: [
        { provide: CamplNgxCapabilitiesService, useValue: fakeCapabilities }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    capSubject.next({ supported: true });
    fixture = TestBed.createComponent(CamplNgxComponent);
    component = fixture.componentInstance;
    // this needs to be set so the template can pass it 'down'
    const navm = {} as NavMenu;
    component.nav_menu$ = of(navm);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
