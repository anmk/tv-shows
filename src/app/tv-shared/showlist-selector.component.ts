import { Component, OnInit } from '@angular/core';

import { ShowlistSelectionService } from './showlist-selection.service';
import { ShowListsService } from '../show-lists/show-lists.service';

@Component({
  selector: 'showlist-selector',

  template: `
    <div class="input-group">
      <label class="col-xs-4 col-form-label">Active Showlist &nbsp;</label>
      <select class="form-control" [ngModel]="selectedId"
        (ngModelChange)="setSelected($event)" >
        <option *ngFor="let showlist of showlists" [value]="showlist.id">
          {{ showlist.name }} 
          [{{ showlist.movies?.length }} shows]
        </option>
      </select>
    </div>
  `,
  
  styles: [``]
})

export class ShowlistSelectorComponent implements OnInit {

selectedId;
showlists = [];

setSelected(id){
  this.selectionService.select(id);
}

  constructor(
    private selectionService:ShowlistSelectionService,
    private showListsService:ShowListsService
  ) {}

  ngOnInit() {
    this.selectionService.getSelectionStreem()
      .subscribe( id => {
        this.selectedId = id;
      })
    this.showListsService.getShowlistsStream()
      .subscribe( showlists => {
        this.showlists = showlists;
      })
  }

}