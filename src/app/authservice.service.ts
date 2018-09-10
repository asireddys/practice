import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor( private http: HttpClient) { }
  private _registerUrl='https://reqres.in/api/register';
  registerUser(user){
    return this.http.post<any>(this._registerUrl,user)
  }

}
