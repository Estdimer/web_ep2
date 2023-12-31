import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
//import { subscribe } from 'diagnostics_channel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:4000/api/users';
  getUser(data:any){
    let datos={
      mail:data.mail,
      contraseña:data.contraseña
    };
    return this.http.post('http://localhost:4000/api/users/mail',datos);
  }
  saveUserData(data: any){
    return this.http.post('http://localhost:4000/api/users/', data);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  updateUser(id: number,data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.put<any>(`http://localhost:4000/api/users/${id}`,JSON.stringify(data),httpOptions).subscribe();
  }
  getCaptcha(id: string){
    
  }

}
