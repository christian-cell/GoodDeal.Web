import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CustomerService } from "src/app/auth/services";
import * as CustomerActions from 'src/app/store/actions/customer/customer.actions';


@Injectable()

export class CustomerEffects {
    
    constructor(
        private action$ :                                                      Actions,
        private customerService:                                               CustomerService
    ){}

    

    storeCustomer$ = createEffect(() => {
        return this.action$
        .pipe(
            ofType(CustomerActions.storeCustomer),
            mergeMap(( action ) => {
                return this.customerService.RegisterCustomer( action.customer )
                .pipe(
                    map((  ) =>{

                        const { customer } = action;
                        
                        return CustomerActions.storeCustomerSuccess({ customer });
                    }),
                    catchError(error => {
                        return of( CustomerActions.storeCustomerFailure({ error : error }) )
                    })
                )
            })
        )
    }) 
}