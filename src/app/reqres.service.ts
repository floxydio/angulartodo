import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ReqresModel, PostModel, Anime } from './reqres-model';
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

  getAnime(): Observable<Anime> {
    return this.http.get<Anime>('https://api.jikan.moe/v4/watch/episodes/popular').pipe(retry(1));
  }

  postLogin(email: string, password:string): Observable<PostModel> {
    console.log(`Data --> ${email} --> ${password}`)
    return this.http.post<PostModel>('https://reqres.in/api/register', {
      email: email,
      password:password
    }).pipe(retry(1));
  }
  
}
