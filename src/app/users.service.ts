import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { subscribe } from 'diagnostics_channel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:4000/api/usuarios';
  getUser(email:any){
    return this.http.get(this.url,email);
  }
  saveUserData(data: any){
    return this.http.post(this.url, data);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
