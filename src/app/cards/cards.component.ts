import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-magic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public title: string;
  public query: string;
  public stateCardsList: boolean;
  public stateCard: boolean;
  public cardName: string;


  constructor(private activeRoute: ActivatedRoute) {
    this.query = null;
    this.title = "My Magic";
  }

  ngOnInit() {
    if (null === this.query) {
      this.activeRoute.url.subscribe(
        () => {
          this.query = this.activeRoute.snapshot.params["query"];          
        }
      )
    }
  }

  GetCardName(name) {
    this.cardName = name;
  }

  OnLoadCardsList(data: boolean) {
    this.stateCardsList = data;
  }

  OnLoadCard(data: boolean) {
    this.stateCard = data;
  }
}
