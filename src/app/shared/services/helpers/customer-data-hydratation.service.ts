import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models';
import { addCustomerDataFromToken } from 'src/app/store/actions/customer/customer.actions';

@Injectable({
  providedIn: 'root'
})

export class CustomerDataHydratationService {

  constructor(
    private store:                                         Store<AppState>
  ) { }

  StoreCustomerData():void{
    
    this.store.dispatch( addCustomerDataFromToken({ order : 'store_customerInfo_from_token' }) );
  }
}
