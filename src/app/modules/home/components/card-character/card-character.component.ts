import { Component, Input } from "@angular/core";
import { CharacterDTO } from "src/app/interfaces/character.interface";

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent {

  @Input() character!: CharacterDTO;
    
  constructor() { }
  
  ngOnInit(): void {
  }
  
}