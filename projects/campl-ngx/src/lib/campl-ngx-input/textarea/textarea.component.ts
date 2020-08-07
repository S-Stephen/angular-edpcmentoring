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
  selector: 'campl-ngx-input-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CamplNgxTextareaComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CamplNgxTextareaComponent),
    multi: true
   }
  ]
})
export class CamplNgxTextareaComponent implements OnInit {

 /*
    * This is a regular textarea
    * @param label - displayed in the field
    * @placeholder - example value displayed in the field
    */

   @Input() label: string;
   @Input() placeholder: string;
   // The validators are set by the parent
   @Input() validator?: ValidatorFn;
   public textareaForm: FormGroup
   value;
   onChange;
   onTouched;

   constructor() { }

   ngOnInit() {
     this.textareaForm = new FormGroup({
       mytextarea: new FormControl('', this.validator)
     })
   }

   // NG_VALIDATORS
   validate({value}: FormControl) {
     // returns errors or null if valid
     return this.textareaForm.get('mytextarea').valid ? null : {invalid: true}
    }
   // ControlValueAccessor
   writeValue(val: any) {
     if ( val ) {
      return this.textareaForm.get('mytextarea').setValue(val, { emitEvent: false })
     }
   }
   registerOnChange(fn: (val: any) => void) {
     this.textareaForm.get('mytextarea').valueChanges.subscribe(fn)
   }
   registerOnTouched(fn: () => void) {
     this.onTouched = fn;
   }
   setDisabledState(disabled: boolean) {
     disabled ? this.textareaForm.disable()
       : this.textareaForm.enable();
   }

}
