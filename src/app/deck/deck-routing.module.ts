import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeckComponent } from './deck.component';

const routes: Routes = [
  {path: "deck", component: DeckComponent},
  {path: "deck/:query", component: DeckComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class DeckRoutingModule { }
