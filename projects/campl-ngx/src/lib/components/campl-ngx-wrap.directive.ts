import { Directive, ElementRef, Renderer2 } from '@angular/core';

import { CamplNgxCapabilitiesService } from '../services/campl-ngx-capabilities.service';
/**
 * This directive is intended to replace:
 *
    // if media queries are not supported set a fixed width container to
    // prevent fluid layout breaking in IE and other browsers which do no support MQ
		if (!Modernizr.mq('only all')) {
			projectlight.$wrap.addClass('campl-fixed-container');
    }
 * queryCLient() needs running from some where - set to run in the root component
 */

@Directive({
  selector: '[CamplNgxWrap]'
})
export class CamplNgxWrapDirective {
  constructor(
    private renderer: Renderer2,
    hostElement: ElementRef,
    public browser_capabilities: CamplNgxCapabilitiesService
  ) {
    browser_capabilities.modernizrSource.subscribe(capabilities => {
      if (capabilities['supported']) {
        this.renderer.removeClass(
          hostElement.nativeElement,
          'campl-fixed-container'
        );
      } else {
        this.renderer.addClass(
          hostElement.nativeElement,
          'campl-fixed-container'
        );
      }
    });
    this.renderer.addClass(hostElement.nativeElement, 'campl-wrap');
  }
}
