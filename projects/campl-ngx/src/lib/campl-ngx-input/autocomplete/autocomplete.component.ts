import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormGroup,
  NG_VALIDATORS,
  ValidatorFn
} from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'campl-ngx-input-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CamplNgxAutocompleteComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CamplNgxAutocompleteComponent),
    multi: true
  }
  ]
})
export class CamplNgxAutocompleteComponent implements OnInit, ControlValueAccessor {

  //myAutoControl = new FormControl('');
  @Input() options: string[];
  @Input() label: string;
  @Input() placeholder: string;
  @Input() validator: ValidatorFn;

  filteredOptions: Observable<string[]>;

  public autoForm: FormGroup 

  // @Input() formControlName: string;
  value;
  onChange;
  onTouched;

  ngOnInit() {
    // if there is a mis-match here then remove project node_modules dir!!

    this.autoForm = new FormGroup({
      myauto: new FormControl('', this.validator)
    })
    this.filteredOptions = this.autoForm.get('myauto').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  // NG_VALIDATORS
  validate({value}: FormControl) {
    // returns errors or null if valid
    return this.autoForm.get('myauto').valid ? null : {invalid:true}
   }

  writeValue(val: any) {
    val && this.autoForm.get('myauto').setValue(val, { emitEvent: false })
  }
  registerOnChange(fn: (val: any) => void) {
    this.autoForm.get('myauto').valueChanges.subscribe(fn)
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    disabled ? this.autoForm.disable()
      : this.autoForm.enable();
  }
}
