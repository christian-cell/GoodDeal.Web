import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpBackend, HttpClient
} from '@angular/common/http';

import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, switchMap, finalize, filter, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

interface RefreshTokenResponse {
  userId:     string;
  token:      string;
  mD5:        string;
  expiration: Date;
  lifetime:   number;
}

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

  private http: HttpClient;
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private backend: HttpBackend) {
    this.http = new HttpClient(backend);
  }

  
  addAuthHeader(request: HttpRequest<string>): HttpRequest<string> {

    const token = localStorage.getItem('token');

    if (token) {

      return request.clone({  
        
        setHeaders: {
          
          Authorization: `Bearer ${token}` 
        }
      });
    }
    return request; 
  }

  
  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {

    if (req.url.includes('Auth/RefreshToken')) {
      
      return next.handle(req); 
    }

    req = this.addAuthHeader(req);

    return next.handle(req).pipe(catchError(error => {

      if (error.status === 401) {

        if (this.refreshTokenInProgress) {

          return this.refreshTokenSubject.pipe(

            filter(result => result !== false), 
            take(1), 
            switchMap(() => next.handle(this.addAuthHeader(req))) 
          );

        } else {

          this.refreshTokenInProgress = true;  

          this.refreshTokenSubject.next(false);  

          return this.refreshAccessToken().pipe(
            
            switchMap((success: boolean) => {

              this.refreshTokenSubject.next(success);  

              return success ? next.handle(this.addAuthHeader(req)) : throwError(error); 
            }),

            
            catchError(innerError => throwError(innerError)),

            finalize(() => this.refreshTokenInProgress = false)
          );
        }
      }

      return throwError(error);
    }));
  }

  refreshAccessToken(): Observable<boolean> {

    const refreshToken = window.localStorage.getItem("token");

    return this.http.post<RefreshTokenResponse>(`${environment.GoodDealAPI.url}Auth/RefreshToken`, { refreshToken }).pipe(switchMap((response:RefreshTokenResponse) => {
      
      localStorage.setItem('token', response.token); 

      return of(true);
    }),
    
    catchError(error => {

      this.refreshTokenSubject.next(false);

      return throwError(error); 
    }));
  }
  
};