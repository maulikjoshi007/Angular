import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from 'src/app/service/serviceapi.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
  
  constructor(private service:ServiceapiService) { }
  displayedColumns:any[] = [];
  isEdit:boolean=false;
  // displayedColumns: string[] = ['id', 'name', 'Email', 'password' , 'confirm password','Mobile','Action'];
  dataSource:any;

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(){
    this.service.getUserData().subscribe((result)=>{
      this.dataSource = result;
      this.displayedColumns = Object.keys(result[0]);
      this.displayedColumns.push('Action')
    })
  }

  startEdit(index: any,row:any){
    this.isEdit=true;
    alert("index"+index + "Row" + row.name);
  }

}
