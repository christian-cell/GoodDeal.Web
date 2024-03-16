import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map , of, switchMap } from "rxjs";
import { SalesService } from "src/app/my-sales/services/httpRequests/sales.service";
import * as SalesActions from 'src/app/store/actions/sales/sales.actions';


@Injectable()

export class SalesEffects {
    
    constructor(
        private action$ :                                                      Actions,
        private salesService:                                                  SalesService
    ){}

    

    storeCustomer$ = createEffect(() => {
        return this.action$
        .pipe(
            ofType(SalesActions.storeMySales),
            switchMap(( action ) => {
                return this.salesService.LoadMySales( action.params )
                .pipe(
                    map(( mySales ) =>{

                        
                        return SalesActions.storeMySalesSuccess({ mySales });
                    }),
                    catchError(error => {
                        return of( SalesActions.storeMySalesFailure({ error : error }) )
                    })
                )
            })
        )
    }) 
}