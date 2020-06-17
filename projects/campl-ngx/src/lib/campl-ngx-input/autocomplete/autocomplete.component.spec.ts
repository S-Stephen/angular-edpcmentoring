import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAutocomplete } from '@angular/material';
import { CamplNgxAutocompleteComponent } from './autocomplete.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CamplNgxAutocompleteComponent', () => {
  let component: CamplNgxAutocompleteComponent;
  let fixture: ComponentFixture<CamplNgxAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxAutocompleteComponent, MatAutocomplete ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxAutocompleteComponent);
    component = fixture.componentInstance;
    component.options=['one','two','three']
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
