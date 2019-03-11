import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck.component';
import { DeckRoutingModule } from './deck-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DeckComponent,
  ],
  imports: [
    CommonModule,
    DeckRoutingModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class DeckModule { }
