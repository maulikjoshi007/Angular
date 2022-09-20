import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServiceapiService } from 'src/app/service/serviceapi.service';
import { EditdataComponent } from '../editdata/editdata.component';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
  
  constructor(private service:ServiceapiService,public dialog:MatDialog) { }
  // displayedColumns:any[] = [];
  isEdit:boolean=false;
  displayedColumns: string[] = ['uid', 'name', 'email', 'password' , 'confirmpassword','mobileno','Action'];
  // dataSource!: MatTableDataSource<any>;
  dataSource = new MatTableDataSource();
  @ViewChild('table') table!: MatTable<any>;

  ngOnInit(): void {
    this.loadUserData();
  }

 

  loadUserData(){
    this.service.getUserData().subscribe((result:any)=>{
      this.dataSource.data = result;
    
    })
  }

  startEdit(index: any,row:any){
    // this.isEdit=true;
    // alert("index"+index + "Row" + row.name);
    const dialogRef = this.dialog.open(EditdataComponent, {
      width: '500px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.UpdateUserData(result).subscribe((result:any)=>{
          alert("Update Succes"+JSON.stringify(result));
          // this.dataSource.users=result;

          this.dataSource.data = this.dataSource.data.map((o:any) => {
            if (o['uid'] === result['uid']) {
              o = result;
            }
            return o;
          })
          // this.loadUserData();
        });
        {

        };
      }
    });
  }

}
