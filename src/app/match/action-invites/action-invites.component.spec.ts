import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActionInvitesComponent } from "./action-invites.component";

describe("ActionInvitesComponent", () => {
  let component: ActionInvitesComponent;
  let fixture: ComponentFixture<ActionInvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionInvitesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  xit("accepting an invite", () => {
    // should see the mentors mentees count rise
    // the invite's count reduce
  });
  xit("declining an invite", () => {
    // should not see ant rise in relationship counts
    // should see a reduction in invites invitation count
  });
});
