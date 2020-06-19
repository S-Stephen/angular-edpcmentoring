import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgxTextInputComponent } from './text.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('CamplNgxTextInputComponent', () => {
  let component: CamplNgxTextInputComponent;
  let fixture: ComponentFixture<CamplNgxTextInputComponent>;

  beforeEach(async(() => {
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
