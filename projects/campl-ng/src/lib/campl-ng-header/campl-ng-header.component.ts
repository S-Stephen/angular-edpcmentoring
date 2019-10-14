import { Component, OnInit, OnDestroy, Renderer2 } from "@angular/core";

@Component({
  selector: "campl-ng-header",
  templateUrl: "./campl-ng-header.component.html",
  styleUrls: ["./campl-ng-header.component.css"]
})
export class CamplNgHeaderComponent implements OnInit, OnDestroy {
  menu_open: boolean = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.menu_open){
        this.renderer.removeClass(document.body, 'campl-navigation-open');
    }
  }

  toggleBodyNavOn(){
    // When actioned will add/remove the css class campl-navigation-open to the body element
    // https://stackoverflow.com/questions/43542373/angular2-add-class-to-body-tag
    this.menu_open = !this.menu_open
    if (this.menu_open){
        this.renderer.addClass(document.body, 'campl-navigation-open');
        console.log("DEBUG added class");
    }else{
        this.renderer.removeClass(document.body, 'campl-navigation-open');
        console.log("REMOVED class");
    }
  }
}
