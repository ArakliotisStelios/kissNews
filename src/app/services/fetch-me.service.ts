import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import { catchError } from "rxjs/operators";
import {SearchItem} from './itemModel'


@Injectable({
  providedIn: 'root'
})
export class FetchMeService {

  constructor(private http:HttpClient) { }

  getNews(): Observable<SearchItem[]> {
    //let apiURL = `https://newsapi.org/v1/sources${searchterm}${page}${etc}`;
    let apiURL="https://newsapi.org/v1/sources"
    return this.http.get(apiURL).pipe(  
      map(res => { 
         let response = res.sources as SearchItem[] 
          return  response ;
      }),
      catchError(err => {
          return throwError(err);
      })       
    )
}

}