import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TvFinderService {
  
  tvs = [];
  
  tvStream = new Subject();

  constructor(private http: Http){ }

  getTvStream() {
    return Observable
    .from<any>(this.tvStream)
    .startWith(this.tvs)
  }

  getTv(id){
    let url = `http://api.tvmaze.com/shows/${id}`;
    return this.http.get(url)
    .map((response: Response) => response.json());
  }

  search(query){
    let url = `http://api.tvmaze.com/search/shows?q=${query}`;
    return this.http.get(url)
    .map((response: Response)=>{
      let data = response.json();
      return data;
    })
    .do(tvs => this.tvs = tvs)
    .subscribe(tvs => this.tvStream.next(this.tvs))
  }

}
