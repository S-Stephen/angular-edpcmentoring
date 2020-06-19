import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  NG_VALUE_ACCESSOR,
  FormGroup,
  ControlValueAccessor,
  NG_VALIDATORS,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'campl-ngx-input-email',
  templateUrl: 'email-input.component.html',
  styleUrls: ['email-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CamplNgxEmailInputComponent),
    multi: true
  }
    , {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CamplNgxEmailInputComponent),
    multi: true
  }
  ]
})
export class CamplNgxEmailInputComponent implements OnInit, ControlValueAccessor {
  /*
    * This is a regular select
    * @param label - displayed in the field
    * @placeholder - example value displayed in the field 
    */

  @Input() label: string;
  @Input() placeholder: string;
  @Input() validator: ValidatorFn;
  public emailForm: FormGroup;

  ngOnInit() {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.email, this.validator])
    })
  }

  value;
  onChange;
  onTouched;
  getErrorMessage() {
    return this.emailForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  // NG_VALIDATORS
  validate({ value }: FormControl) {
    // returns errors or null if valid
    console.log("email valid: "+this.emailForm.get('email').valid)
    return this.emailForm.get('email').valid ? null : { invalid: true }
  }

  // ControlValueAccessor
  writeValue(val: any) {
    val && this.emailForm.get('email').setValue(val, { emitEvent: false })
  }
  registerOnChange(fn: (val: any) => void) {
    this.emailForm.get('email').valueChanges.subscribe(fn)
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    disabled ? this.emailForm.disable()
      : this.emailForm.enable();
  }
}