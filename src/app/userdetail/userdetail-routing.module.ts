import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';

const routes: Routes = [
  {
    path:'AddData',
    component:AddDataComponent
  },
  {
    path:'DisplayData',
    component:DisplaydataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdetailRoutingModule { }
