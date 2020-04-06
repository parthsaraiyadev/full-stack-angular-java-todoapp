import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HellowWorldBean{

  constructor(public message:string){

  }

}


@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http:HttpClient) { 

  }

  executeHelloWorldBeanService(){
    return this.http.get<HellowWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executePathVariableService(name){

    // let basicAuthString = this.createAuthenticationHeaderService();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthString
    // })

    return this.http.get<HellowWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`,
    // {headers}
    );
  }

  // createAuthenticationHeaderService(){

  //   let username = 'user';
  //   let password = 'password';

  //   let basicAuthString = 'Basic ' + window.btoa(username  + ":" + password);

  //   return basicAuthString;
  // }

}
