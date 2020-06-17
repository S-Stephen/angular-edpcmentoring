import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'men-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.scss']
})
export class FormfieldsComponent implements OnInit {
  // https://medium.com/@joshblf/using-child-components-in-angular-forms-d44e60036664
  //myFormGroup: FormGroup;
  
  public myFormGroup: FormGroup = new FormGroup({
    myselect: new FormControl("",[Validators.required]),
    myemail: new FormControl("",[]),
    mydate: new FormControl("",[Validators.required]),
    myauto: new FormControl("",[Validators.required])
    //this.fb.group({
    //myrequired: ['', Validators.required], 
    //myselect: ['', Validators.required]
  }); 

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
  }

  save(){
    alert("saved & valid: "+JSON.stringify(this.myFormGroup.value)+" : "+this.myFormGroup.valid)
  }
}
