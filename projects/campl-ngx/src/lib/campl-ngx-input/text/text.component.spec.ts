import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamplNgxTextInputComponent } from './text.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CamplNgxTextInputComponent', () => {
  let component: CamplNgxTextInputComponent;
  let fixture: ComponentFixture<CamplNgxTextInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxTextInputComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
