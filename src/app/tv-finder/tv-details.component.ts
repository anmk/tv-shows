import { Component, OnInit } from '@angular/core';
import { TvFinderService } from './tv-finder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tv-details',

  template: `
    <header class="row mt-2 title">
      <h1 class="display-5 title">Show info</h1>
    </header>
    
    <div class="row info-space-bottom" *ngIf="tv">
      <div class="col-lg-5">
        <div class="row mt-1">
          <tv-card-details class="card info-space row" [tv] = "tv"></tv-card-details>
        </div>
      </div>
      <div class="col-lg-7 mt-1">
        <tv-movie-shared class="card info-space" [tv]="tv"></tv-movie-shared>
      </div>
    </div>
  `,
  
  styles: [`
    .info-space-bottom {
      margin-bottom: 3rem;
    }
    .info-space {
      margin: 0 auto 1rem auto;
    }
    .title {
      margin-left: .25rem;
    }
  `]
})

export class TvDetailsComponent implements OnInit {
 
  constructor(private tvFinderService:TvFinderService,
              private activatedRoute:ActivatedRoute) {}    

  tv;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['details_id'];
    this.tvFinderService.getTv(id)
    .subscribe(tv => {
      this.tv = tv;
    })
   }

}
