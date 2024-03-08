import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './pages/auth/auth.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';



@NgModule({
  declarations: [
    CustomerRegisterComponent,
    AuthComponent,
    CustomerLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: []
})
export class AuthModule { }
