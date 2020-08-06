import { CamplNgxWrapDirective } from './campl-ngx-wrap.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CamplNgxCapabilitiesService } from '../services/campl-ngx-capabilities.service';
import { ReplaySubject } from 'rxjs';

@Component({
  template: '<div class="someclass" CamplNgxWrap>My test div with wrap</div>'
})
class TestCamplNgxWrapDirectiveComponent {}

describe('CamplNgxWrapDirective', () => {
  let component: TestCamplNgxWrapDirectiveComponent;
  let fixture: ComponentFixture<TestCamplNgxWrapDirectiveComponent>;
  let mydiv: DebugElement;
  let fakeCapabilities;
  const capSubject = new ReplaySubject(1);

  beforeEach(() => {
    fakeCapabilities = {
      modernizrSource: capSubject.asObservable()
    };
    TestBed.configureTestingModule({
      declarations: [CamplNgxWrapDirective, TestCamplNgxWrapDirectiveComponent],
      providers: [
        { provide: CamplNgxCapabilitiesService, useValue: fakeCapabilities }
      ]
    });
    fixture = TestBed.createComponent(TestCamplNgxWrapDirectiveComponent);
    component = fixture.componentInstance;
    mydiv = fixture.debugElement.query(By.css('div'));
  });
  it('unsupporting browsers should have campl-fixed-container class', () => {
    capSubject.next({ supported: false });
    expect(
      mydiv.nativeElement.classList.contains('campl-fixed-container')
    ).toBeTruthy();
  });
  it('supporting browsers should NOT have campl-fixed-container class', () => {
    capSubject.next({ supported: true });
    expect(
      mydiv.nativeElement.classList.contains('campl-fixed-container')
    ).not.toBeTruthy();
  });

  it('supporting and unsupporting browsers should have campl-wrap class', () => {
    capSubject.next({ supported: false });
    expect(mydiv.nativeElement.classList.contains('campl-wrap')).toBeTruthy();
    capSubject.next({ supported: true });
    expect(mydiv.nativeElement.classList.contains('campl-wrap')).toBeTruthy();
  });
});
