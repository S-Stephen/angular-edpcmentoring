import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

/**
 * Interface required by our component
 * This ensures that an understandable and valid methos is available
 * to render the item summary
 */
export interface ICamplNgxPageNav {
  printOut: () => string | number;
}

/**
 *
 * This component is used to signal that a user wishes to toggle
 * datasets, by an enumerator, which could be year or other serial
 *
 * @example
 * 
 * <campl-ngx-page-nav [heading]="headingObjects" [initialIndex]="3" [values]="objects" (current)="myobject=$event">
 * </campl-ngx-page-nav>
 * 
 * 
 * export class WrapperClassObject implements ICamplNgxPageNav {
 *  myobj: any
 *  printOut(): string | number {
 *    return this.myobj.title;
 *  }
 * }
 * 
 * // in the parent component
 * objects = Array.from({ length: 12 }, (i, v) => {
 *    let myobj = {
 *       title: "Course " + (v + 2015),
 *       id: v + 2015
 *     }
 *   const ret1 = new WrapperClassObject();
 *   ret1.myobj = myobj
 *   return ret1;
 * });
 * object1 = this.objects[3];
 * headingObjects = "View: ";
 * myobject = this.object1;
 * 
 * 
 * @param {string} heading - The heading to display between navigation links.
 * @param {number} initialIndex - The Value to first display
 * @param {boolean} displayValue - Whether to display the current output value
 * @param {any[]} values - Array of values we are navigating around, these must implement the ICamplNgxPageNav Interface
 * 
 * @returns {any} current - One of the items in the values array, as the selected value
 */
@Component({
  selector: "campl-ngx-page-nav",
  templateUrl: "./campl-ngx-page-nav.component.html",
  styleUrls: ["./campl-ngx-page-nav.component.css"]
})
export class CamplNgxPageNavComponent implements OnInit {
  @Input() heading = "heading input not set";
  @Input() initialIndex = 0;
  @Input() values = [];
  @Input() displayValue = true;
  @Output() current = new EventEmitter<any>();

  value: number;
  index: number;

  constructor() {}

  ngOnInit() {
    this.value = this.values[this.initialIndex];
    this.index = this.initialIndex // this.values.indexOf(this.initial);
  }
  navigateNext() {
    if (this.values.length > this.index) {
      this.index++;
    }
    this.current.emit(this.values[this.index]);
  }
  navigatePrevious() {
    if (0 < this.index) {
      this.index--;
    }
    this.current.emit(this.values[this.index]);
  }
}
