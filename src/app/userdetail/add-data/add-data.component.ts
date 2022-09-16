import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { ServiceapiService } from 'src/app/service/serviceapi.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  form!: FormGroup;
  private uid = 0;

  @ViewChild('table') table!: MatTable<any>;

  displayedColumns = ['name', 'email', 'password' , 'confirmpassword','mobileno','Action'];
  dataSource: MatTableDataSource<AbstractControl>;

  
  ngOnInit(): void {
  
  }

  get ControlArray() {
    return this.form.get('users') as FormArray;
  }

  constructor(private fb: FormBuilder,private service:ServiceapiService,private router:Router) {
    this.createForm();
    this.addRow();
    this.dataSource = new MatTableDataSource(
      this.ControlArray.controls);
  }

  createForm() {
    this.form = this.fb.group({
      users: this.fb.array([]),
    });
  }

  trackRows(index: number, row: AbstractControl) {
    return row.value.uid;
  }

  private addRow() {
    const rows = this.ControlArray;
    rows.push(
      this.fb.group({
        uid: this.nextUid(),
        name:['',Validators.required],
       email:['',[Validators.email,Validators.required]],
       password:['',Validators.required],
       confirmpassword:['',Validators.required],
       mobileno: ['',[Validators.maxLength(10),Validators.required]]
      })
    );
  }

  get name() { return this.form.get('name'); }

  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get getControl(){
    return this.form.controls;
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  createRow() {
    this.addRow();
    this.table.renderRows();
  }

  deleteRow(index:any){
    debugger;
    if((confirm ("Are You Sure To Delete These Row ??"))){
      const control = this.ControlArray;
      control.removeAt(index);
      this.table.renderRows();
    }
  }

  private nextUid() {
    ++this.uid
    return this.uid;
  }

  submitData(){
    console.log(this.form.value);
  // var val={
  //   user:this.form.value
  // }
    this.service.SaveUserData(this.form.value.users).subscribe((res)=>{
      alert(JSON.stringify(res));
      this.router.navigate(['UserData/DisplayData']);
    });

  }
}
