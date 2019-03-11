import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { TypesService } from 'src/app/shared/services/types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-magic-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {

  @Output() onLoad: EventEmitter<boolean>;
  @Input() type: string;
  public cards: CardModel[];
  public page: number;

  constructor(private magicTheGatheringService: MagicTheGatheringService,
    private typesService: TypesService,
    private router: Router) {
    this.cards = []
    this.onLoad = new EventEmitter(true)
    if (!this.page) {
    this.page = 1;
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.type) {
      this.loadCards();
    }
    if (!this.typesService.isType(this.type)) {
      this.router.navigate(['/cards'])
      return
    }
    this.loadCards(this.type)
  }

  nextPage() {
    this.page++;
    this.loadCards(this.type)
  }

  lastPage() {
    this.page--;
    this.loadCards(this.type)
  }

  onBeforeCards() {
    this.onLoad.emit(true);
  }

  onLoadCards() {
    this.onLoad.emit(false);
  }

  loadCards(typeCards: string = null) {
    this.onBeforeCards();
    (null === typeCards
      ? this.magicTheGatheringService.getCards(this.page)
      : this.magicTheGatheringService.getCardsByType(typeCards)).subscribe(
        (data: CardListModel) => {
          this.onLoadCards();
          this.cards = data.cards;
        }
      )
  }
}