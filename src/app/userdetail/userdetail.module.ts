import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdetailRoutingModule } from './userdetail-routing.module';
import { DisplaydataComponent } from './displaydata/displaydata.component';
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
import { MatDialogModule } from '@angular/material/dialog';
import { EditdataComponent } from './editdata/editdata.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DisplaydataComponent,
    AddDataComponent,
    EditdataComponent
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
    MatCardModule,
    MatDialogModule,
    // FlexLayoutModule,
    
  ]
})
export class UserdetailModule { }
