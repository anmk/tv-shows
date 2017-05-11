import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tv-card-details',
  templateUrl: './tv-card-details.component.html',
  styleUrls: ['./tv-card-details.component.scss']
})

export class TvCardDetailsComponent implements OnInit {

  @Input('tv')
  set setTv(tv){
    this.tv = tv;
  }

  tv;

  blancUrl = 'http://localhost:4200/assets/no_shield_available.svg';

  constructor() {}

  ngOnInit() {}

}
