import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routung.module';
import { HomeComponent } from './home.component';
import { CardsCharactersComponent } from './components/cards-characters/cards-characters.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardsCharactersComponent,
    CardCharacterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
