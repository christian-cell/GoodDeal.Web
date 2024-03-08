import { HttpErrorResponse } from "@angular/common/http";

export class LoginCustomer {
  email =                                                    "";
  password =                                                 "";
}

export class CustomerRegister extends LoginCustomer {
  firstName =                                                "";
  lastName =                                                 "";
  documentNumber =                                           "";
  prefix =                                                   "";
  phone =                                                    "";
  passwordConfirm?=                                          "";
  active =                                                   true;
  error?:                                                    HttpErrorResponse;
  token? =                                                   "";
  userId? =                                                  "";
  tokenExpiration?=                                          "";
  lifeTime?=                                                 0;
  mD5?=                                                      "";
}

