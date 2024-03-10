import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
  
    let request = req;

    if (window.localStorage.getItem('token')) {
      console.log('entra por aquí');
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ window.localStorage.getItem('token') }`
        }
      });
    }

    return next.handle(request);
  }
}
