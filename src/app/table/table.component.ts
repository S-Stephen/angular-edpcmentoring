import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

@Component({
  selector: 'men-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  headings$: Observable<any[]>;
  content$: Observable<any[]>;
  constructor() { }

  ngOnInit() {

    // set content of the table
    //
    //
    this.headings$ = of([
      [{ value: "heading1" }, { value: "heading2" }, { value: "heading3" }]
    ]);
    this.content$ = of([
      [
        [
          { value: "row1 col1" },
          { value: "row1 col2" },
          { value: "row1 col3" }
        ],
        [{ value: "row2 col1" }, { value: "row2 col2" }, { value: "row2 col3" }]
      ]
    ]);
  }

}
