import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  FormGroup,
  ControlValueAccessor,
  ValidatorFn,
  NG_VALIDATORS
} from '@angular/forms';

@Component({
  selector: 'campl-ngx-input-text',
  templateUrl: 'text.component.html',
  styleUrls: ['text.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CamplNgxTextInputComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CamplNgxTextInputComponent),
    multi: true
   }
  ]
})
export class CamplNgxTextInputComponent implements OnInit, ControlValueAccessor {
  /*
    * This is a regular select
    * @param label - displayed in the field
    * @placeholder - example value displayed in the field
    */

  @Input() label: string;
  @Input() placeholder: string;
  // The validators are set by the parent
  @Input() validator?: ValidatorFn;
  public textForm: FormGroup
  value;
  onChange;
  onTouched;

  constructor() { }

  ngOnInit() {
    this.textForm = new FormGroup({
      mytext: new FormControl('', this.validator)
    })
  }

  // NG_VALIDATORS
  validate({value}: FormControl) {
    // returns errors or null if valid
    return this.textForm.get('mytext').valid ? null : {invalid: true}
   }
  // ControlValueAccessor
  writeValue(val: any) {
    return val && this.textForm.get('mytext').setValue(val, { emitEvent: false })
  }
  registerOnChange(fn: (val: any) => void) {
    this.textForm.get('mytext').valueChanges.subscribe(fn)
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    disabled ? this.textForm.disable()
      : this.textForm.enable();
  }
}
