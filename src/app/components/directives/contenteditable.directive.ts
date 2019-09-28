import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { __values } from "tslib";

/**
 * providing the [innerHTML] input will provide two way binding
 * usage: <pre menContenteditable contenteditable (content)="updateFunctionToHandleNewValue($event)" [innerHTML]="component_element_to_bind"></pre>
 */

@Directive({
  selector: "[menContenteditable]"
})
export class ContenteditableDirective {
  @Output() content = new EventEmitter<string>();

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "#fff";
  }
  @HostListener("blur") onmouseleave() {
    this.content.emit(this.el.nativeElement.innerHTML);
  }
}
