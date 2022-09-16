import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {

  readonly APIUrl = "http://localhost:8000/" 
  constructor(private http:HttpClient) { }

  getUserData():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'users/');
  }

  SaveUserData(value:any){
    return this.http.post(this.APIUrl + "users/",value);
  }

  UpdateUserData(value:any){
    return this.http.put(this.APIUrl + "users/",value);
  }
}
