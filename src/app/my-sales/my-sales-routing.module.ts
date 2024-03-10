import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/mySalesList/list.component';
import { NewSaleComponent } from './pages/new-sale/new-sale.component';

const routes : Routes = [
  {
    path :'',
    children:[
      {
        path:'' , component : ListComponent
      },
      {
        path:'newSale' , component : NewSaleComponent
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
export class MySalesRoutingModule { }
