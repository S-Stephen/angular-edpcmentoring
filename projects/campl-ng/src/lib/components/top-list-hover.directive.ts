import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";
import { CamplNgCapabilitiesService } from "../services/campl-ng-capabilities.service";

@Directive({
  selector: "[camplTopListHover]"
})
export class TopListHoverDirective {
  capabilities: any;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    public browser_capabilities: CamplNgCapabilitiesService
  ) {
    el.nativeElement.style.backgroundColor = "yellow";
    browser_capabilities.modernizrSource.subscribe(capabilities => {
      this.capabilities = capabilities;
    });
  }
  @HostListener("mouseover") onHover() {
    if (!this.capabilities["mobile_layout"]) {
      this.renderer.addClass(this.el.nativeElement, "campl-hover");
    }
    //this.el.nativeElement.addClass("hovering");
  }
  @HostListener("mouseleave") onLeave() {
    if (!this.capabilities["mobile_layout"]) {
      this.renderer.removeClass(this.el.nativeElement, "campl-hover");
    }
    //this.el.nativeElement.style.backgroundColor = "blue";
  }
}
