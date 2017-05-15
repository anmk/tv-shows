import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowListsService, Showlist } from './show-lists.service';

@Component({
  selector: 'show-delete',

  template: `
    <div *ngIf = "showlist">
      <h3>Warning!</h3>
      <h4 class="warning-delete"> Are you sure you want to delete this list: <span class="erasing-delete">{{showlist.name}}</span>?</h4>
      <div class="form-group">
        <button type="button" class="btn btn-outline-danger float-right" (click)="delete(showlist)" aria-label="Delete button">Delete</button>
        <button type="button" class="btn btn-outline-secondary float-left" (click)="cancel(showlist)" aria-label="Cancel button">Cancel</button>
      </div>
    </div>
  `,

  styles: [`
    .warning-delete {
      color: rgba(255,0,0,.8);
      margin-bottom: 1rem;
    }
    .erasing-delete {
      color: rgba(110,182,67,1);
    }
  `]
})

export class ShowDeleteComponent implements OnInit {

  showlist:Showlist;

   delete(showlist) {
     this.showListsService.deleteShowList(showlist)
     .subscribe( showlist => {
       this.router.navigate(['showlists']);
     })
  }

    cancel(showlist) {
    this.router.navigate(['showlists', showlist.id]);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private showListsService: ShowListsService
  ) { }

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
