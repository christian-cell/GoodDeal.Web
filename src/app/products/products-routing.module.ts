import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyProductsComponent } from './pages/my-products/my-products.component';

const routes : Routes = [
  {
    path :'',
    children:[
      {
        path:'' , component : MyProductsComponent
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
export class ProductsRoutingModule { }
