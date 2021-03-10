import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamplNgxTextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
  let component: CamplNgxTextareaComponent;
  let fixture: ComponentFixture<CamplNgxTextareaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
