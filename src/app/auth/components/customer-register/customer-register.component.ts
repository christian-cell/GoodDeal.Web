import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState, CustomerRegister, LoginResponse } from 'src/app/models';
import { addLoginDataToCustomer, storeCustomer } from 'src/app/store/actions/customer/customer.actions';
import { CustomerService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-register',
  standalone: false,
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.scss'
})

export class CustomerRegisterComponent implements OnDestroy {

  customerForRegister :             CustomerRegister = new CustomerRegister();
  customerDestroyed$:               Subject<void> = new Subject<void>();

  CustomerRegisterForm =            new FormGroup({
    firstName :                     new FormControl('' , [Validators.required]),
    lastName :                      new FormControl('' , [Validators.required]),
    phone :                         new FormControl('' , [Validators.required]),
    documentNumber :                new FormControl('' , [Validators.required]),
    email :                         new FormControl('' , [Validators.required,Validators.email]),
    password :                      new FormControl('' , [Validators.required]),
    passwordConfirm :               new FormControl('' , [Validators.required]),
  })

  constructor(
    private store:                  Store<AppState>,
    private customerService:        CustomerService,
    private router:                 Router
  ){

  }

  RegisterCustomer():void{
    
    const { CustomerRegisterForm : { status , value } } = this;

    if( status === 'VALID' ){


      const { firstName , lastName , phone , documentNumber , email , password , passwordConfirm } = value || {};

      if( firstName && lastName && phone && documentNumber && email && password && passwordConfirm ){

        const customerToRegister : CustomerRegister = {
          ...this.customerForRegister , firstName : firstName , 
          lastName : lastName , phone : phone , 
          documentNumber : documentNumber , email: email , 
          password : password , passwordConfirm : passwordConfirm 
        }

        this.store.dispatch(storeCustomer({ customer : customerToRegister }));

        this.LoginCustomer();

      }
    }
  }

  LoginCustomer():void{
    
    this.store.select( AppState => AppState.customer ).pipe( takeUntil( this.customerDestroyed$ ) ).subscribe(( customer : CustomerRegister ) => {

      if( !customer.error ){

        if( customer.email && !customer.token ){

          this.customerService.LoginCustomer({ email : customer.email , password : customer.password }).subscribe(( logingResponse : LoginResponse ) => {
  
            this.store.dispatch( addLoginDataToCustomer({ logingResponse : logingResponse }) )
  
          })
  
        } else {
  
          this.router.navigate(['home']);
        }

      } else{
        console.log(customer.error);
      }
    })
  }

  ngOnDestroy(): void {
    this.customerDestroyed$.next();
    this.customerDestroyed$.complete();
  }
}
