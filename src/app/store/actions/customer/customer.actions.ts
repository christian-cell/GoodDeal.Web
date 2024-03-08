import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store"
import { CustomerRegister, LoginResponse } from "src/app/models";

export const storeCustomer = createAction(
    '[Customer] Store customer',
    props<{ customer : CustomerRegister }>()
)

export const storeCustomerSuccess = createAction(
    '[Customer] Store customer success',
    props<{ customer : CustomerRegister }>()
)

export const storeCustomerFailure = createAction(
    '[Customer] Store customer failure',
    props<{ error : HttpErrorResponse }>()
)

export const addLoginDataToCustomer = createAction(
    '[Customer] Add login data to customer',
    props<{ logingResponse : LoginResponse }>()
)

export const addCustomerDataFromToken = createAction(
    '[Customer] Add customer data from token',
    props<{ customerInfo : { logingResponse : LoginResponse , customerData : {email:string , password : string} } }>()
)

export const cleanCustomerData = createAction(
    '[Customer] Clean customer data',
    props<{ order : string }>()
)