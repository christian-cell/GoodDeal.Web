import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerRegister, RegisterResponse , LoginResponse } from 'src/app/models';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http:                                     HttpClient
  ) { }

  RegisterCustomer( customer : CustomerRegister ):Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(`${environment.GoodDealAPI.url}Auth/Register` , customer);
  }

  LoginCustomer( credentials : { email : string , password: string } ):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.GoodDealAPI.url}Auth/AuthAsync` , credentials);
  }

  refreshToken() {
    return this.http.post(`${environment.GoodDealAPI.url}auth/RefreshToken`, {}); 
}

}
