import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MatchMenteeWithMentorDialogComponent } from "./match-mentee-with-mentor-dialog.component";

describe("MatchMenteeWithMentorDialogComponent", () => {
  let component: MatchMenteeWithMentorDialogComponent;
  let fixture: ComponentFixture<MatchMenteeWithMentorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchMenteeWithMentorDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchMenteeWithMentorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  xit("should not be displayed if to_resolve is 0", () => {
    // check that the element disappears when all invites have bene resolved
  });
});
