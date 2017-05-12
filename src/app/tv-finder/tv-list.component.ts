import { Component, OnInit } from '@angular/core';

import { TvFinderService } from './tv-finder.service';

@Component({
  selector: 'tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.scss']
})

export class TvListComponent implements OnInit {
  
  tvs;

  constructor( private tvFinder: TvFinderService ) {}

  ngOnInit() {
    this.tvs = this.tvFinder.getTvStream()
  }

}

