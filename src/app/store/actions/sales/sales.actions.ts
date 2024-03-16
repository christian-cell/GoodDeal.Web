import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store"
import { CustomerRegister, LoginResponse, SaleResponse } from "src/app/models";

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