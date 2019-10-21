import { Directive, ElementRef, Renderer2 } from "@angular/core";

import { CamplNgCapabilitiesService } from "../services/campl-ng-capabilities.service";
/**
 * This directive is intended to replace:
 * 
		//if media queries are not supported set a fixed width container to prevent fluid layout breaking in IE and other browsers which do no support MQ
		if (!Modernizr.mq('only all')) {
			projectlight.$wrap.addClass("campl-fixed-container");
    }
    
 * queryCLient() needs running from some where - set to run in the root component 
 */

@Directive({
  selector: "[camplNgWrap]"
})
export class CamplNgWrapDirective {
  constructor(
    private renderer: Renderer2,
    hostElement: ElementRef,
    public browser_capabilities: CamplNgCapabilitiesService
  ) {
    browser_capabilities.modernizrSource.subscribe(capabilities => {
      if (capabilities["supported"]) {
        renderer.removeClass(
          hostElement.nativeElement,
          "campl-fixed-container"
        );
      } else {
        renderer.addClass(hostElement.nativeElement, "campl-fixed-container");
      }
    });
    renderer.addClass(hostElement.nativeElement, "campl-wrap");
  }
}
