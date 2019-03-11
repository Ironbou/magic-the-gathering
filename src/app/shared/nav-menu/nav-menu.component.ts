import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-magic-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  public title: string;

  constructor() { 
    this.title = "My Magic";
  }

  ngOnInit() {
  }

}
