import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInputComponent } from './email-input.component';
import { MatFormField, MatLabel, MatError, MatInputModule, MatInput } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('EmailInputComponent', () => {
  let component: EmailInputComponent;
  let fixture: ComponentFixture<EmailInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailInputComponent, MatFormField, MatLabel, MatError, MatInput  ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
