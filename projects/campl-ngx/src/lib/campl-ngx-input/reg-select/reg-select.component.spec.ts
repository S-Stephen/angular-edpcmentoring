import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgxRegSelectComponent } from './reg-select.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CamplNgxRegSelectComponent', () => {
  let component: CamplNgxRegSelectComponent;
  let fixture: ComponentFixture<CamplNgxRegSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxRegSelectComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxRegSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
