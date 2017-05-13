import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

export interface Showlist {
  name: string,
  movies: any[],
  outerIds: any[],
  favourite: boolean
}

@Injectable()
export class ShowListsService {

  server_url = `http://localhost:3000/showlists/`;

  constructor(private http:Http,
              private activatedRoute:ActivatedRoute) {}

  showlists = [];

  addToShowlist(showlistId, movie, outerId){
    let showlist = this.showlists.find( showlist => showlist.id == showlistId );
    showlist.movies.push(movie);
    showlist.outerIds.push(outerId);
    this.saveShowList(showlist)
    .subscribe(() => {})
  }

  saveShowList(showlist) {
    let serverRequest;
     if(showlist.id){
       serverRequest = this.http.put(this.server_url + showlist.id, showlist)
    } else {
      serverRequest = this.http.post(this.server_url, showlist)
    }
   return serverRequest.map(response => response.json())
    .do(showlist => {
      this.getShowLists();
    });
  }

   deleteShowList(showlist) {
    let serverRequest;
     if(showlist.id){
       serverRequest = this.http.delete(this.server_url + showlist.id, showlist)
    } 
   return serverRequest.map(response => response.json())
    .do(showlist => {
      this.getShowLists();
    });
  }

  createShowList():Showlist {
    return {
      name: '',
      movies: [],
      outerIds: [],
      favourite: false
    };
  }

  getShowList(id){
    return this.http.get(this.server_url + id)
    .map(response => response.json());
}

  getShowLists(){
    return this.http.get(this.server_url)
    .map(response => response.json())
    .subscribe( showlists => {
      this.showlists = showlists;
      this.showlistsStream$.next(this.showlists);
    })
  }

  showlistsStream$ = new Subject<Showlist[]>();

  getShowlistsStream(){
    if(!this.showlists.length){
      this.getShowLists();
    }
    return this.showlistsStream$.startWith(this.showlists); 
  }

}
