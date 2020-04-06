import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';
import("@angular/common/http");

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let username = 'user';
    // let password = 'password';

    // let basicAuthString = 'Basic ' + window.btoa(username + ":" + password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(sessionStorage.getItem('authenticateUser') && sessionStorage.getItem('token'))
      request = request.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })
    return next.handle(request);
  }
}
