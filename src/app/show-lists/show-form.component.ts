import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowListsService, Showlist } from './show-lists.service';

@Component({
  selector: 'show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss']
})

export class ShowFormComponent implements OnInit {

  showlist:Showlist;

  save(valid, showlist) {
    if (!valid){
      return;
    }
    this.showListsService.saveShowList(showlist)
    .subscribe( showlist => {
      this.router.navigate(['showlists', showlist.id]);
    })
  }

  cancel(showlist) {
    this.router.navigate(['showlists']);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private showListsService: ShowListsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id) {
        this.showListsService.getShowList(id)
        .subscribe((showlist:Showlist) => {
        this.showlist = Object.assign({}, showlist);
        })
      } else {
        this.showlist = this.showListsService.createShowList();
      }
    })
  }

}
