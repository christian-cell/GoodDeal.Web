import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpBackend
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  private http: HttpClient;

  constructor(private backend: HttpBackend) {
    this.http = new HttpClient(backend);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const token: string | null = localStorage.getItem('access_token');

    if (token) {

      req = req.clone({

        setHeaders: {

          Authorization: `Bearer ${token}`

        }
      });
    }

    return next.handle(req).pipe(catchError(error => {
      if (error.status === 401) {
        
        this.http.post<{userId : string , token : string , md5 : string , Expiration : Date , lifetime : number}>(`${environment.GoodDealAPI.url}Auth/RefreshToken`, {
          
          refreshToken: window.localStorage.getItem("token")
        
        }).subscribe(response => {
          
          localStorage.setItem('access_token', response.token);

          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${response.token}`
            }
          });

          return next.handle(req);
        });
      }
      return throwError(error);
    }));
  }
}