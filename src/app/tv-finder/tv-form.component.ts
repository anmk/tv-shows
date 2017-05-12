import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TvFinderService } from './tv-finder.service';

@Component({
  selector: 'tv-form',

  template: `
    <form [formGroup]="findForm">
      <div class="input-group">
        <input type="text" formControlName="query" class="form-control" placeholder="key words" name="query">
      </div>
    </form>
  `,
  
  styles: [``]
})

export class TvFormComponent implements OnInit {

  findForm: FormGroup

  constructor( private tvFinder: TvFinderService ) { 
    this.findForm = new FormGroup({
      'query': new FormControl('')
    })
    this.findForm.get('query')
    .valueChanges
    .debounceTime(400)
    .filter(query => query.length > 1)
    .subscribe(query => {
      this.tvFinder.search(query)
    })
   }

  ngOnInit() {}

}
