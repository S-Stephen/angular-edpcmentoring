import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteMentorDialogComponent } from './invite-mentor-dialog.component';

describe('InviteMentorDialogComponent', () => {
  let component: InviteMentorDialogComponent;
  let fixture: ComponentFixture<InviteMentorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteMentorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteMentorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
