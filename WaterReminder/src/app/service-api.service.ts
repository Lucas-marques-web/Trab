import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private api :String ='https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  read(){
    return this.http.get(`${this.api}/todos/1`)
  }
}

