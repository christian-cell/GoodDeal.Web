import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale, SaleResponse } from 'src/app/models';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(
    private http :                                           HttpClient
  ) { }

  LoadMySales( params : { first : number , size : number } ):Observable<SaleResponse>{
    return this.http.get<SaleResponse>(`${environment.GoodDealAPI.url}Sale?First=${params.first}&Size=${params.size}`)
  }

  AddNewSingleSale( sale : FormData ):Observable<Sale>{
    return this.http.post<Sale>(`${environment.GoodDealAPI.url}Sale`, sale)
  }
}
