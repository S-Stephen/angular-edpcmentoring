import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMenteeInviteDialogComponent } from './action-mentee-invite-dialog.component';

describe('ActionMenteeInviteDialogComponent', () => {
  let component: ActionMenteeInviteDialogComponent;
  let fixture: ComponentFixture<ActionMenteeInviteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionMenteeInviteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMenteeInviteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
