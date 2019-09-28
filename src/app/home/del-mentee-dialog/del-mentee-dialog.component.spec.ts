import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelMenteeDialogComponent } from './del-mentee-dialog.component';

describe('DelMenteeDialogComponent', () => {
  let component: DelMenteeDialogComponent;
  let fixture: ComponentFixture<DelMenteeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelMenteeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelMenteeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
