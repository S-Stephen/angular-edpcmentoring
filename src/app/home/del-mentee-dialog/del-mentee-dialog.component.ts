import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { Relationship } from "../../classes/relationship";
import { MenteesService } from "../../services/mentees.service";

@Component({
  selector: "men-del-mentee-dialog",
  templateUrl: "./del-mentee-dialog.component.html",
  styleUrls: ["./del-mentee-dialog.component.css"]
})
export class DelMenteeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DelMenteeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Relationship,
    private menteesService: MenteesService
  ) {}

  ngOnInit() {}

  public cancel() {
    // close this window without any action
    this.dialogRef.close();
  }

  public endMenteeRel(event: any, rel: Relationship) {
    event.stopPropagation();
    //console.log("end relationship " + rel.id);
    this.menteesService.endMenteeRelationship(rel).subscribe(rel => {
      //console.log(rel.id + " has been removed ");
      //we also need to remove this entry from our mentors list!
      this.menteesService.fetchMenteeRelationships();
      this.dialogRef.close();
    });
  }
}
