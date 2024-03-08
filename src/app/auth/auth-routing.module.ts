import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';

const routes : Routes = [
  {
    path :'',
    children:[
      {
        path:'authorize' , component : AuthComponent
      },
      {
        path:'**' , redirectTo: 'authorize' , pathMatch:'full'
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
export class AuthRoutingModule { }
