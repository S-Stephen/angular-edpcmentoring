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
    mytext: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    mytext1: new FormControl("",[]),
    myselect: new FormControl("",[Validators.required]),
    myselectobjs: new FormControl("",[Validators.required]),
    myemail: new FormControl("",[Validators.required, Validators.pattern('.*@eng\.*')]),
    mydate: new FormControl("",[Validators.required]),
    auto: new FormControl("",[Validators.required])
    //this.fb.group({
    //myrequired: ['', Validators.required], 
    //myselect: ['', Validators.required]
  }); 

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    
  }

  save(){
    alert("saved & valid: "+JSON.stringify(this.myFormGroup.value)+" - "+JSON.stringify(this.myFormGroup.get('myemail').valid)+" : "+this.myFormGroup.valid)
  }
}
