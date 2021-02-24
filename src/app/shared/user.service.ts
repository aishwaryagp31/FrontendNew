import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Key } from "protractor";
import { Log } from "./log";
//import { FormsModule } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  formData:User = new User();
  readonly baseURL = 'http://localhost:5000/api/Users';

  currentId: Log={
    userId:'',
    userName:''
  };
  postUserRegister()
  {
    return this.http.post(this.baseURL,this.formData);
  }
  login(model:Log)
  {
      return this.http.post(this.baseURL+'/login',model).pipe(
        map((response:any)=>{
             this.currentId.userId=response.userId;
             this.currentId.userName=response.userName;
             sessionStorage.setItem("key",JSON.stringify(response));
             return this.currentId;
        })
      );
  }

  
}
