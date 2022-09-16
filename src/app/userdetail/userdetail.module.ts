import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdetailRoutingModule } from './userdetail-routing.module';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { AdddataComponent } from './adddata/adddata.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { AddDataComponent } from './add-data/add-data.component'
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DisplaydataComponent,
    AdddataComponent,
    AddDataComponent
  ],
  imports: [
    CommonModule,
    UserdetailRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatCardModule
    
  ]
})
export class UserdetailModule { }
