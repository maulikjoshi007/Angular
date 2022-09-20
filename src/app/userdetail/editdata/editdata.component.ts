import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, Form } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  formInstance: FormGroup;
 
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<EditdataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     
    this.formInstance = new FormGroup({
      "uid":  new FormControl('', Validators.required),
      "name": new FormControl('', Validators.required),
      "email": new FormControl('', [Validators.email,Validators.required]),
      "password": new FormControl('', Validators.required),
      "confirmpassword": new FormControl('', Validators.required),
      "mobileno": new FormControl('', Validators.required),
    });
  
    this.formInstance.setValue(data);
 
  }

  ngOnInit(): void {

  }

  save(): void {
    this.dialogRef.close(Object.assign(new FormGroup({}).controls,this.formInstance.value));
  }
}
