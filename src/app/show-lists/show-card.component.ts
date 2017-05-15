import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-card',

  template: `
  <div class="card">
    <div class="card-block">
      <h4 class="card-title">{{title}}</h4>
      <ng-content></ng-content>
    </div>    
  </div>
  `,

  styles: [``]
})

export class ShowCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
