import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ServiceapiService } from 'src/app/service/serviceapi.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  public userForm!: FormGroup;
  Form:any;
  displayedColumns: string[] = ['id','name', 'email', 'password' , 'confirmpassword','Mobile','Action'];
  constructor(private fb: FormBuilder,private service:ServiceapiService) {
    this.userForm = this.fb.group({
      tableRows: this.fb.array([]),
    });
  }

  get getFormControls():FormArray {
    return this.userForm.get('tableRows') as FormArray;
    // return control;
  }
  ngOnInit(): void {
    
    // // this.initiateForm();
    // this.userForm = this.fb.group({
    //   tableRows: this.fb.array([]),
    // });
    
    // this.addRow();
    // this.userForm = this.fb.group({
    //   name:['',Validators.required],
    //   emailid:['',Validators.email,Validators.required],
    //   password:['',Validators.required],
    //   confirmpass:['',Validators.required],
    //   mobileno:['',Validators.required,Validators.maxLength(10)]
    // })
  }

  // initiateForm():any {
  //  this.userForm = new FormGroup({
  //     name:new FormControl(['',Validators.required]),
  //     email:new FormControl(['',[Validators.email,Validators.required]]),
  //     password:new FormControl(['',Validators.required]),
  //     confirmpass:new FormControl(['',Validators.required]),
  //     mobileno:new FormControl(['',[Validators.required,Validators.maxLength(10)]])
  //   });
  //   return this.userForm;
  // }
  initiateForm(): FormGroup {
   return this.fb.group({
       name:new FormControl(['',Validators.required]),
       email:new FormControl(['',[Validators.email,Validators.required]]),
       password:new FormControl(['',Validators.required]),
       confirmpass:new FormControl(['',Validators.required]),
       mobileno:new FormControl(['',[Validators.required,Validators.maxLength(10)]])
      // name:'',
      // email:'',
      // password:'',
      // confirmpass:'',
      // mobileno:''
      
     });
    //  this.tableRows.push(this.Form)
    //  return this.Form;
   }
 
  //  addRows(){
  //   this.tableRows.push(this.initiateForm());
  //  }
  // addRow() {
   
  //   this.tableRows =  this.userForm.get('tableRows') as FormArray;
  //   this.tableRows.push(this.initiateForm());
  // }

  // ngAfterOnInit() {
  //   this.tableRows = this.userForm.get('tableRows') as FormArray;
  // }

  deleteRow(index: number) {
    const control =  this.userForm.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  
}
