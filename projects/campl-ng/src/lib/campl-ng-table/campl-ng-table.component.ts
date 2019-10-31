import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

// A very basic table implementation
// lacks methods to merge cells and rows etc
// Think about using material.angular instead?

@Component({
  selector: "campl-ng-table",
  templateUrl: "./campl-ng-table.component.html",
  styleUrls: ["./campl-ng-table.component.css"]
})
export class CamplNgTableComponent implements OnInit {
  // TODO how do we check that this array has consistant
  // TODO interface for table cells / rows
  @Input() data$: Observable<any[]>; // actually an array of arrays
  @Input() headings$: Observable<any[]>; // actually an array of arrays - multiple rows envisaged!
  heading_rows: any[];
  content_rows: any[];
  no_data_message: string;

  // There are two interfaces to accomodate;
  // campl-vertical-stacking-table
  // campl-responsive-table

  constructor() {}

  ngOnInit() {
    this.headings$.subscribe(headings => {
      this.heading_rows = headings;
    });
    this.data$.subscribe(contents => {
      this.content_rows = contents;
    });
  }
}
// There are lots of 'features still to implement.
// table data with HTML markup
// table rows with actions eg click etc
// from custom.js: Still to implement:
/*
    from custom.js:
		// FULLY EXPANDED RESPONSIVE TABLE SOLUTION
		//responsive table solution
		var $tableContainer = $(".campl-responsive-table");

		//cycle through all responsive tables on page to instantiate open link
		$tableContainer.each(function (i) {
			var $table = $(this).find("table");
			var summary = "";

			//hide table
			$table.hide(); //might have to use positioning to prevent it being hidden from screen readers

			//suck out caption and summary to display above link
			var openTable = "<div class='campl-open-responsive-table'><a href='#' class='campl-open-responsive-table-link'>Click to open table " + $table.find("caption").text() + "</a>" + summary + "</div>"

			//insert button to open table in page
			$(this).prepend(openTable);

			//create collapse button and hide until table is opened
			$(this).find('.campl-open-responsive-table').append("<a href='#' class='campl-collapse-table'>Collapse table</a>");

			$('.campl-collapse-table').hide();

			//collapse table and restore open link to user
			$(this).find('.campl-collapse-table').bind("click", function (e) {
				var $tableContainer = $(e.target).parent().parent();
				$tableContainer.removeClass("campl-expanded-table");
				$table.removeClass("campl-full-width-table").hide();
				//show appropriate open link
				$(e.target).parent().find('.campl-open-responsive-table-link').show();
				//hide collapse link
				$(e.target).hide();
				e.preventDefault();
			})


			//open table on bind click event
			$(this).find(".campl-open-responsive-table-link").bind("click", function (e) {
				$(e.target).parent().parent().addClass("campl-expanded-table");
				$table.addClass("campl-full-width-table");
				$table.show();
				//show appropriate close link
				$(e.target).parent().find('.campl-collapse-table').show();
				//hide open link
				$(e.target).hide();
				e.preventDefault();
			});

		})
*/
