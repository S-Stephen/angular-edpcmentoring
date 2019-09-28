import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[camplTopListHover]"
})
export class TopListHoverDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";
  }
  @HostListener("mouseover") onHover() {
    this.renderer.addClass(this.el.nativeElement, "campl-hover");
    //this.el.nativeElement.addClass("hovering");
  }
  @HostListener("mouseleave") onLeave() {
    this.renderer.removeClass(this.el.nativeElement, "campl-hover");
    //this.el.nativeElement.style.backgroundColor = "blue";
  }
}
