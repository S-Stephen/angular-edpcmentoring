import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgxDateSelectComponent } from './date-select.component';

describe('CamplNgxDateSelectComponent', () => {
  let component: CamplNgxDateSelectComponent;
  let fixture: ComponentFixture<CamplNgxDateSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxDateSelectComponent ]
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
