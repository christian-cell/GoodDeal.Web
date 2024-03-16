import { CustomerRegister } from "../class/CustomerRegister.models";
import { SaleResponse } from "../class/saleResponse.models";

export interface AppState {
    Customer : CustomerRegister,
    MySales :  SaleResponse
}