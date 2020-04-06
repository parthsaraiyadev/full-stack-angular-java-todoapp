import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user == null)
  }

  logoutUser() {
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }


  getAuthenticatedUser() {
    sessionStorage.getItem('authenticateUser');
  }


  getAuthenticatedToken() {
    if(this.getAuthenticatedUser){
    sessionStorage.getItem('token');
    }
  }


  executeBasicAuthenticationSerive(username, password) {

    let basicAuthString = 'Basic ' + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthString
    })

    return this.http.get<AutheticationBean>(`http://localhost:8080/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticateUser', username);
            sessionStorage.setItem('token', basicAuthString);
            return data;
          }
        )
      );
  }

  createAuthenticationHeaderService() {

    let username = 'user';
    let password = 'password';

    let basicAuthString = 'Basic ' + window.btoa(username + ":" + password);

    return basicAuthString;
  }

}
export class AutheticationBean {

  constructor() {

  }

}


