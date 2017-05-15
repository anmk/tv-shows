import { Component, OnInit } from '@angular/core';
import { ShowListsService, Showlist } from './show-lists.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'show-list',
  templateUrl: './show-lists-package.component.html',  
  styleUrls: ['./show-lists-package.component.scss']
})

export class ShowListComponent implements OnInit {

  constructor(private showListsService:ShowListsService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  showlists = [];

  ngOnInit() {
    this.showListsService.getShowlistsStream()
    .subscribe((showlists:Showlist[]) => {
      this.showlists = showlists;
    });
    this.router.events
    .subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

}
