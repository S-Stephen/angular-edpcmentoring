import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchMentorWithMenteeDialogComponent } from './match-mentor-with-mentee-dialog.component';

describe('MatchMentorWithMenteeDialogComponent', () => {
  let component: MatchMentorWithMenteeDialogComponent;
  let fixture: ComponentFixture<MatchMentorWithMenteeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchMentorWithMenteeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchMentorWithMenteeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
