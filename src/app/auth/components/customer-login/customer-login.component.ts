import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppState, LoginResponse } from 'src/app/models';
import { CustomerService } from '../../services';
import { Router } from '@angular/router';
import { LoginCustomer } from 'src/app/models/class/CustomerRegister.models';
import { addCustomerDataFromToken } from 'src/app/store/actions/customer/customer.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer-login',
  standalone: false,
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.scss'
})

export class CustomerLoginComponent implements OnDestroy {

  customerForRegister :             LoginCustomer = new LoginCustomer();
  customerDestroyed$:               Subject<void> = new Subject<void>();

  LoginForm =                       new FormGroup({
   
    email :                         new FormControl('' , [Validators.required,Validators.email]),
    password :                      new FormControl('' , [Validators.required]),
  })

  constructor(
    private store:                  Store<AppState>,
    private customerService:        CustomerService,
    private router:                 Router
  ){

  }

  LoginCustomer(): void {

    const { LoginForm: { status, value } } = this;
  
    if (status === 'VALID') {

      const { email, password } = value || {};
  
      if (email && password) {
        
        const customer: LoginCustomer = { ...this.customerForRegister, email: email, password: password };
  
        this.customerService.LoginCustomer({ email: customer.email, password: customer.password }).subscribe((logingResponse: LoginResponse) => {

          if( logingResponse.token && logingResponse.token.length > 0 ){

            this.store.dispatch( 
              addCustomerDataFromToken(
                { customerInfo : { logingResponse : logingResponse , customerData : {email:customer.email , password : customer.password} } }
              ) 
            )
  
            this.router.navigate(['home']);
          }

        } , (error : HttpErrorResponse) => {
          console.log(error);
        });
      }
    } else {
      console.error('Formulario no válido');
    }
  }

  /* Logout():void{
    this.router.navigate(['auth/authorize']);
    this.store.dispatch( cleanCustomerData({ order : 'clean_user_info' }) );
  } */
  
  ngOnDestroy(): void {
    this.customerDestroyed$.next();
    this.customerDestroyed$.complete();
  }

}
