import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    NavMenuComponent,
  ]
})
export class SharedModule { }
