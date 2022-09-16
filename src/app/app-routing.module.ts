import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'UserData',
    loadChildren:()=>import("./userdetail/userdetail.module").then(module=>module.UserdetailModule)
  },
  {
    path:'',
    redirectTo:'UserData/AddData',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
