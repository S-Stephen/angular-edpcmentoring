import { Component, ViewEncapsulation, OnInit, forwardRef, Input } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';


// ?? https://medium.com/@amandeepkochhar/angular-material-datepicker-set-custom-date-in-dd-mm-yyyy-format-5c0f4340e57 ? ? ?
import { AppDateAdapter, APP_DATE_FORMATS } from '../shared/format-datepicker';
import {
  ControlValueAccessor,
  FormGroup, FormControl, 
  NG_VALUE_ACCESSOR, 
  NG_VALIDATORS, 
  ValidatorFn
} from '@angular/forms';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};


@Component({
  selector: 'campl-ngx-input-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CamplNgxDateSelectComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CamplNgxDateSelectComponent),
      multi: true
    }]
})
export class CamplNgxDateSelectComponent implements OnInit, ControlValueAccessor {


  // @Input() formControlName: string;
  @Input() validator: ValidatorFn;
  @Input() label: string;
  @Input() placeholder: string;

  value;
  onChange;
  onTouched;
  public dateForm: FormGroup

  // Example highlighting particular dates in the calendar
  // eng start - end of periods
  //dateClass = (d: Date): MatCalendarCellCssClasses => {
  //  const date = d.getDate();
  // 
  //  // Highlight the 1st and 20th day of each month.
  //  let custom_class = (date === 1 || date === 20) ? 'start-custom-date-class' : '';
  //  custom_class = (date === 8 || date === 28) ? 'end-custom-date-class' : custom_class;
  //  return custom_class
  //}
  // Then add: [dateClass]="dateClass" to <mat-datepicker>

  constructor() { }

  ngOnInit() {
    this.dateForm = new FormGroup({
      date: new FormControl('', this.validator)
    })
  }
  //NG_VALIDATORS
  validate({ value }: FormControl) {
    // returns errors or null if valid
    return this.dateForm.valid ? null : { invalid: true }
  }
  // ControlValueAccessor implementation
  writeValue(val: any) {
    val && this.dateForm.setValue(val, { emitEvent: false })
  }
  registerOnChange(fn: (val: any) => void) {
    this.dateForm.valueChanges.subscribe(fn)
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    disabled ? this.dateForm.disable()
      : this.dateForm.enable();
  }

}
