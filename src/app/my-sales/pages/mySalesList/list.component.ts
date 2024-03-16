import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppState } from 'src/app/models';
import { storeMySales } from 'src/app/store/actions/sales/sales.actions';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent implements OnInit , OnDestroy {

  customerSalesDestroyed$:                                       Subject<void> = new Subject<void>();
  
  constructor(
    private store :                                      Store<AppState>
  ){}

  ngOnInit(): void {

    this.StoreCustomerSales();
  }

  StoreCustomerSales():void{
    
    this.store.dispatch( storeMySales({ params : { first: 1 , size:10 } }) )
  }

  ngOnDestroy(): void {

    this.customerSalesDestroyed$.next();
    this.customerSalesDestroyed$.complete();
  }

}
