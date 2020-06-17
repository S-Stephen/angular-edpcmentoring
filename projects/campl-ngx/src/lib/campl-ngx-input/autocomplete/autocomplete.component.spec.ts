import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgxAutocompleteComponent } from './autocomplete.component';

describe('CamplNgxAutocompleteComponent', () => {
  let component: CamplNgxAutocompleteComponent;
  let fixture: ComponentFixture<CamplNgxAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
