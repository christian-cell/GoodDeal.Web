import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/pages';

const routes : Routes = [
  {
    path :'',
    children:[
      {
        path:'' , component : HomeComponent
      },
      {
        path:'**' , redirectTo: '' , pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})


export class HomeRoutingModule { }
