import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Task } from './../Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  server: string = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.append('enctype', 'multipart/form-data');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('X-Requested-With', 'XMLHttpRequest');
   }

   addTast(title: string): Observable<Task> {
     const newTask = new Task(title);
     return this.http.post<Task>(this.server + 'add', newTask);
   }
}
