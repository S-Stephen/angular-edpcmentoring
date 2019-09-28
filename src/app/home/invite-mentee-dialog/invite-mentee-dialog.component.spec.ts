import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteMenteeDialogComponent } from './invite-mentee-dialog.component';

describe('InviteMenteeDialogComponent', () => {
  let component: InviteMenteeDialogComponent;
  let fixture: ComponentFixture<InviteMenteeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteMenteeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteMenteeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
