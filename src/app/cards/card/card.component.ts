import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';

@Component({
  selector: 'my-magic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Output() onLoad: EventEmitter<boolean>;
  @Output() onCardSelected: EventEmitter<string>;
  @Input() id: string;
  public card: CardModel;

  constructor(private magicTheGatheringService: MagicTheGatheringService) {
    this.onLoad = new EventEmitter(true);
    this.onCardSelected = new EventEmitter();
   }

  ngOnInit() {
  }

  onBeforeCards() {
    this.onLoad.emit(true);
  }

  onLoadCards() {
    this.onLoad.emit(false);
  }

  ngOnChanges() {
    this.onBeforeCards()
    if (this.id) {
      this.magicTheGatheringService.getCardsById(this.id).subscribe(
        (data: CardListModel) => {
          this.card = data.cards[0];
          console.log(this.card);
          this.onCardSelected.emit(data.cards[0].name);
          this.onLoadCards()
        }
      )
    }
  }

}
