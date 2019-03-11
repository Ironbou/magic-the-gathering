import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-magic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onClick: EventEmitter<boolean>;
  @Input() stateCardsList: boolean;
  @Input() stateCard: boolean;
  @Input() title: string

  constructor() { 
    this.onClick = new EventEmitter()
  }

  ngOnInit() {
  }

  OnClickMenu() {
      this.onClick.emit(true);
  }
}
