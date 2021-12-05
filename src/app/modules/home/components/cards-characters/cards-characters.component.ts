import { Component, Input, OnInit } from '@angular/core';

import { CharacterDTO } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-cards-characters',
  templateUrl: './cards-characters.component.html',
  styleUrls: ['./cards-characters.component.scss']
})
export class CardsCharactersComponent implements OnInit {

  @Input() characters!: CharacterDTO[];
  @Input() error!: string | any;

  constructor() { }

  ngOnInit(): void {
  }

}
