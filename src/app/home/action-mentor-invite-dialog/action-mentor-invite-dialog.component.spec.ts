import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMentorInviteDialogComponent } from './action-mentor-invite-dialog.component';

describe('ActionMentorInviteDialogComponent', () => {
  let component: ActionMentorInviteDialogComponent;
  let fixture: ComponentFixture<ActionMentorInviteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionMentorInviteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMentorInviteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
