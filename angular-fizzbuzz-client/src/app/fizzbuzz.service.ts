import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FizzbuzzService {

  constructor(private http:  HttpClient) { }

  fizzbuzz(upperRange: number) : Observable<string>  {
    const params = new HttpParams().set('upperRange', upperRange);
    const url : string =  'http://localhost:8080/fizzbuzz';
    const options = { params: params,  responseType: 'text' };  
    return this.http.get(url, { params: params,  responseType: 'text' });
  }
}
