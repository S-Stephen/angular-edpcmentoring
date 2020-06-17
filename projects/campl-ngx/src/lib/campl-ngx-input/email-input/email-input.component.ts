import { Component, forwardRef, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  NG_VALUE_ACCESSOR,
  FormGroup,
  ControlValueAccessor,
  NG_VALIDATORS,
  NgForm,
  FormGroupDirective
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
export class CamplNgxEmailInputComponent implements ControlValueAccessor {
  /*
    * This is a regular select
    * @param label - displayed in the field
    * @placeholder - example value displayed in the field 
    */

  @Input() label: string;
  @Input() placeholder: string;
  public emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  value;
  onChange;
  onTouched;
  getErrorMessage() {
    return this.emailForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  // NG_VALIDATORS
  validate({value}: FormControl) {
    // returns errors or null if valid
    return this.emailForm.get('email').valid ? null : {invalid:true}
   }

  // ControlValueAccessor
  writeValue(val: any) {
    val && this.emailForm.setValue(val, { emitEvent: false })
  }
  registerOnChange(fn: (val: any) => void) {
    this.emailForm.valueChanges.subscribe(fn)
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    disabled ? this.emailForm.disable()
      : this.emailForm.enable();
  }
}