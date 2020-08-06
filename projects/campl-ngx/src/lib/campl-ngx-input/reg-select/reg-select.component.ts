import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'campl-ngx-input-reg-select',
  templateUrl: './reg-select.component.html',
  styleUrls: ['./reg-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => CamplNgxRegSelectComponent ),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CamplNgxRegSelectComponent),
    multi: true
  }]
})
export class CamplNgxRegSelectComponent implements OnInit, ControlValueAccessor {
  /*
    * This is a regular select
    * @param options an array of select option values to choose from
    */
  @Input() options: [] // todo should be class Option or similar?
  @Input() label: string
  @Input() placeholder: string
  @Input() validator: ValidatorFn
  public selectForm: FormGroup

  value;
  onChange;
  onTouched;
  constructor() { }

  ngOnInit() {
    this.selectForm = new FormGroup({
      selected: new FormControl('', this.validator )
    })
    // this.selectForm = this.fb.group();
  }
  // NG_VALIDATORS
  validate({value}: FormControl) {
    // returns errors or null if valid
    return this.selectForm.get('selected').valid ? null : {invalid: true}
   }
  writeValue(val: any) {
    if ( val ) {
      return this.selectForm.setValue(val, { emitEvent: false })
    }
  }
  registerOnChange(fn: (val: any) => void) {
    this.selectForm.valueChanges.subscribe(fn)
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    disabled ? this.selectForm.disable()
      : this.selectForm.enable();
  }
}
