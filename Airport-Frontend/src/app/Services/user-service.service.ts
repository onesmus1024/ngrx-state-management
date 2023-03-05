import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    return this.http.post('http://localhost:3000/login',{email,password})
  }

  register(name:string,email:string,password:string){
    console.log(name,email,password)
    return this.http.post('http://localhost:3000/register',{name,email,password})
  }
}
