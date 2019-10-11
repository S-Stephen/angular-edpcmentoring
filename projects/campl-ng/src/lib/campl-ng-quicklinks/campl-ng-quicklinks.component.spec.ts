import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgQuicklinksComponent } from './campl-ng-quicklinks.component';

describe('CamplNgQuicklinksComponent', () => {
  let component: CamplNgQuicklinksComponent;
  let fixture: ComponentFixture<CamplNgQuicklinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgQuicklinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgQuicklinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
