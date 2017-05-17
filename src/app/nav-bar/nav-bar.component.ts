import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',

  template: `
    <nav class="navbar navbar-toggleable navbar-light bg-faded">
      <div class="container">
        
        <ul class="nav navbar-nav float-right">
          <li class="nav-item">
            <a class="nav-link" routerLink="/tv" routerLinkActive="active" aria-label="Tv program link">Tv programs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/showlists"routerLinkActive="active" aria-label="Show lists link">Show lists</a>
          </li>
        </ul>

      </div>
    </nav>
  `,

  styles: []

})

export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
