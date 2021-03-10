import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamplNgxDateSelectComponent } from './date-select.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CamplNgxDateSelectComponent', () => {
  let component: CamplNgxDateSelectComponent;
  let fixture: ComponentFixture<CamplNgxDateSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxDateSelectComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxDateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
