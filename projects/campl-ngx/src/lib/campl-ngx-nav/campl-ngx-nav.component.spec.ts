import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamplNgxNavComponent } from './campl-ngx-nav.component';
import { CamplNgxLocalnavMenuComponent } from '../campl-ngx-localnav-menu/campl-ngx-localnav-menu.component';

import { of, ReplaySubject } from 'rxjs';
import { NavMenu } from '../models/nav-menu';
import { CamplNgxCapabilitiesService } from '../services/campl-ngx-capabilities.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'campl-ngx-localnav-menu',
  template: '<p>Mock localnav</p>'
})
class MocklocalNavComponent {
  @Input() menu: any;
}

describe('CamplNgxNavComponent', () => {
  let component: CamplNgxNavComponent;
  let fixture: ComponentFixture<CamplNgxNavComponent>;
  let fakeCapabilities;
  const capSubject = new ReplaySubject(1);

  beforeEach(waitForAsync(() => {}));

  beforeEach(() => {
    fakeCapabilities = {
      modernizrSource: capSubject.asObservable()
    };
    TestBed.configureTestingModule({
      declarations: [CamplNgxNavComponent, MocklocalNavComponent],
      providers: [
        { provide: CamplNgxCapabilitiesService, useValue: fakeCapabilities }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CamplNgxNavComponent);
    component = fixture.componentInstance;

    capSubject.next({ supported: true });
    // mock an input to the component
    const navm = {} as NavMenu;
    component.nav_menu$ = of(navm);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
