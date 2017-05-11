import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tv-card-list',
  templateUrl: './tv-card-list.component.html',
  styleUrls: ['./tv-card-list.component.scss']

})

export class TvCardListComponent implements OnInit {
  
  @Input('tv')
  set setTv(tv){
    this.tv = tv;
  }

  tv;
  
  blancUrl = 'http://localhost:4200/assets/no_shield_available.svg';
  
  constructor() {}

  ngOnInit() {}

}
