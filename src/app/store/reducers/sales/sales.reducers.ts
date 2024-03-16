import { createReducer, on } from '@ngrx/store';
import {  SaleResponse } from 'src/app/models';
import * as SalesActions from 'src/app/store/actions/sales/sales.actions';

export interface mySalesState {
    MySales : SaleResponse
}

export const initialMySalesEntries : SaleResponse = new SaleResponse() ;

export const MySalesReducer = createReducer(
    initialMySalesEntries,

    on( SalesActions.storeMySalesSuccess , (state , { mySales })=>{
       

        state = mySales;
        return state;
    }),
    
    
) 