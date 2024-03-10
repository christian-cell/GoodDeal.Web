import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'', redirectTo : 'home' , pathMatch:'full'
  },
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path:'products',
    loadChildren:()=> import('./products/products.module').then(m=>m.ProductsModule),
    canActivate: [AuthGuard]
  },
  {
    path:'mySales',
    loadChildren:()=> import('./my-sales/my-sales.module').then(m=>m.MySalesModule),
    canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
