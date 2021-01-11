import { Component, OnInit } from '@angular/core';


import { ICamplNgxPageNav } from "campl-ngx";


export class WrapperClassObject implements ICamplNgxPageNav {
  myobj: any

  printOut(): string | number {
    return this.myobj.title;
  }
}

@Component({
  selector: 'cngx-pagenav',
  templateUrl: './pagenav.component.html',
  styleUrls: ['./pagenav.component.scss']
})
export class PagenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // objects 'name': 'object YYYY'
  objects = Array.from({ length: 12 }, (i, v) => {
    let myobj = {
        title: "Course " + (v + 2015),
        id: v + 2015
      }
    const ret1 = new WrapperClassObject();
    ret1.myobj = myobj
    return ret1;
  });
  object1 = this.objects[3];
  headingObjects = "View: ";
  myobject = this.object1;

}
