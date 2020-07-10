import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';

import { CamplNgxSnackbarComponent } from 'campl-ngx';

@Component({
  selector: 'men-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.scss']
})
export class FormfieldsComponent implements OnInit {
  // https://medium.com/@joshblf/using-child-components-in-angular-forms-d44e60036664
  //myFormGroup: FormGroup;
  
  private _snackbarDurationInSeconds: number = 2

  public myFormGroup: FormGroup = new FormGroup({
    mytext: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    mytext1: new FormControl("",[]),
    mytextarea: new FormControl("",[]),
    myselect: new FormControl("",[Validators.required]),
    myselectobjs: new FormControl("",[Validators.required]),
    myemail: new FormControl("",[Validators.required, Validators.pattern('.*@eng\.*')]),
    mydate: new FormControl("",[Validators.required]),
    auto: new FormControl("",[Validators.required])
    //this.fb.group({
    //myrequired: ['', Validators.required], 
    //myselect: ['', Validators.required]
  }); 

  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar) { 

  }

  ngOnInit() {
    
  }

  save(){
    alert("saved & valid: "+JSON.stringify(this.myFormGroup.value)+" - "+JSON.stringify(this.myFormGroup.get('myemail').valid)+" : "+this.myFormGroup.valid)
  }

  openSnackBar1() {
    this._snackBar.openFromComponent(CamplNgxSnackbarComponent, {
      duration: this._snackbarDurationInSeconds * 1000,
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
