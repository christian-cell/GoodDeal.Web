import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store"
import { CustomerRegister, LoginResponse, Sale, SaleResponse } from "src/app/models";

export const storeMySales = createAction(
    '[Sale] store mySales',
    props<{ params : { first : number , size : number } }>()
)

export const storeMySalesSuccess = createAction(
    '[Sale] store mySales sucess',
    props<{ mySales : SaleResponse }>()
)

export const storeMySalesFailure = createAction(
    '[Sale] store mySales failure',
    props<{ error : HttpErrorResponse }>()
)

export const storeNewSale = createAction(
    '[Sale] store new single sale',
    props<{ newSale : FormData }>()
)

export const storeNewSalesuccess = createAction(
    '[Sale] store new single sale success',
    props<{ newSale : Sale }>()
)

export const storeNewSaleFailure = createAction(
    '[Sale] store new single sale failure',
    props<{ error : HttpErrorResponse }>()
)