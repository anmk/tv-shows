import { Component, OnInit, Input } from '@angular/core';

import { ShowlistSelectionService } from './showlist-selection.service';

@Component({
  selector: 'tv-description',
  templateUrl: './tv-description.component.html',
  styleUrls: ['./tv-description.component.scss']
})

export class TvDescriptionComponent implements OnInit {

  @Input()
  tv;
  
  constructor( private selectionService:ShowlistSelectionService) { }

   addToShowlist(movie, outerId){
     this.selectionService.addToShowlist(movie, outerId); 
   }

  ngOnInit() {}

}
