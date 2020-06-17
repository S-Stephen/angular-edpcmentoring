import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgxEmailInputComponent } from './email-input.component';
import { MatFormField, MatLabel, MatError, MatInputModule, MatInput } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('CamplNgxEmailInputComponent', () => {
  let component: CamplNgxEmailInputComponent;
  let fixture: ComponentFixture<CamplNgxEmailInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxEmailInputComponent, MatFormField, MatLabel, MatError, MatInput  ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
