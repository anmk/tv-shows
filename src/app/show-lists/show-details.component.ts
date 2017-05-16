import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowListsService, Showlist } from './show-lists.service';

@Component({
  selector: 'show-detail',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})

export class ShowDetailComponent implements OnInit {

  showlist:Showlist;

  edit(showlist) {
    this.router.navigate(['showlists', showlist.id, 'edit']);
  }

  delete(showlist) {
    this.router.navigate(['showlists', showlist.id, 'delete']);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private showListsService: ShowListsService
  ) {  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id) {
        this.showListsService.getShowList(id)
        .subscribe((showlist:Showlist) => {
          this.showlist = showlist;
        })
      }
    })
  }

}
