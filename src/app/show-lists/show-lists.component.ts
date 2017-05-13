import { Component, OnInit } from '@angular/core';
import { ShowListsService } from './show-lists.service';

@Component({
  selector: 'show-lists',
  templateUrl: './show-lists.component.html',
  styleUrls: ['./show-lists.component.scss']
})

export class ShowListsComponent implements OnInit {
  
  constructor(private showListsService:ShowListsService){}

  ngOnInit() {};

};
