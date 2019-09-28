import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { Relationship } from "../../classes/relationship";
import { MentorsService } from "../../services/mentors.service";

@Component({
  selector: "men-del-mentor-dialog",
  templateUrl: "./del-mentor-dialog.component.html",
  styleUrls: ["./del-mentor-dialog.component.css"]
})
export class DelMentorDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DelMentorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Relationship,
    private mentorsService: MentorsService
  ) {}

  ngOnInit() {}

  public cancel() {
    // close this window without any action
    this.dialogRef.close();
  }

  public endMentorRel(event: any, rel: Relationship) {
    event.stopPropagation();
    //console.log("end relationship " + rel.id);
    this.mentorsService.endMentorRelationship(rel).subscribe(rel => {
      //console.log(rel.id + " has been removed ");
      //we also need to remove this entry from our mentors list!
      this.mentorsService.fetchMentorRelationships();
      this.dialogRef.close();
    });
  }
}
