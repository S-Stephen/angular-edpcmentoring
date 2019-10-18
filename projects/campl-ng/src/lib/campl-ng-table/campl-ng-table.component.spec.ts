import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CamplNgTableComponent } from "./campl-ng-table.component";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
  selector: `host-component`,
  template: `
    <campl-ng-table
      [data$]="testcontent$"
      [headings$]="testheadings$"
    ></campl-ng-table>
  `
})
class TestCamplNgTableComponent {
  testheadings$: Observable<any>;
  testcontent$: Observable<any>;

  constructor() {
    this.testheadings$ = of([
      [{ value: "heading1" }, { value: "heading2" }, { value: "heading3" }]
    ]);
    this.testcontent$ = of([
      [{ value: "row1 col1" }, { value: "row1 col2" }, { value: "row1 col3" }],
      [{ value: "row2 col1" }, { value: "row2 col2" }, { value: "row2 col3" }]
    ]);
  }
  ngOnInit() {}
}

describe("CamplNgTableComponent", () => {
  let component: CamplNgTableComponent;
  let fixture: ComponentFixture<CamplNgTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CamplNgTableComponent, TestCamplNgTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit("should create", () => {
    expect(component).toBeTruthy();
  });

  fit("should display headings and content correctly", () => {
    // inner text of first heading should be "heading1"

    let headings = By.css("thead");
    let ele = fixture.debugElement.query(headings);
    console.log(ele);
    expect(fixture.debugElement.query(headings)).toBeTruthy();
  });

  fit("should stack when reduced", () => {});
});
