import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ReqresModel } from './reqres-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<ReqresModel> {
    return this.http.get<ReqresModel>('https://reqres.in/api/users').pipe(retry(1));
  }
}
