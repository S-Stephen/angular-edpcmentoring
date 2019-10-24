import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgLocalnavMenuComponent } from './campl-ng-localnav-menu.component';

describe('CamplNgLocalnavMenuComponent', () => {
  let component: CamplNgLocalnavMenuComponent;
  let fixture: ComponentFixture<CamplNgLocalnavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgLocalnavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgLocalnavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
