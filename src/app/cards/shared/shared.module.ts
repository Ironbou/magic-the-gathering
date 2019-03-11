import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule as SharedGlobal } from '../../shared/shared.module'
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedGlobal,

  ],
  exports: [
    HeaderComponent,
    SharedGlobal,
  ]
})
export class SharedModule { }
