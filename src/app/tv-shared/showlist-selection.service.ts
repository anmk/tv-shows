import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ShowListsService } from '../show-lists/show-lists.service';

@Injectable()
export class ShowlistSelectionService {

  constructor( private showListsService:ShowListsService) {
    this.showListsService.getShowlistsStream()
    .subscribe( showlists => {
      if( !this.selectedId ){
        this.select('1');
      }
    })
  }

  selectedId;

  selectedIdStreem = new Subject();

  getSelectionStreem(){
    return this.selectedIdStreem.startWith(this.selectedId)
  }

  select(showlistId){
    this.selectedId = showlistId;
    this.selectedIdStreem.next(this.selectedId);
  }

  addToShowlist(movie, outerId){
    this.showListsService.addToShowlist(this.selectedId, movie, outerId); 
  }

}
