import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelMentorDialogComponent } from './del-mentor-dialog.component';

describe('DelMentorDialogComponent', () => {
  let component: DelMentorDialogComponent;
  let fixture: ComponentFixture<DelMentorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelMentorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelMentorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
