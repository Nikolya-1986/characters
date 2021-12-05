import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CharacterDTO, CharactersDTO } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {

  public characters!: CharacterDTO[];
  public error: string = '';
  private destroy$ = new Subject();

  constructor(
    private characterService: CharacterService,
  ) { }

  public ngOnInit(): void {
    this.fetchAllCharacters();
  }

  private fetchAllCharacters(): CharactersDTO | any {
    this.characterService.getAllCharacters()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe((response: CharactersDTO) => {
      this.characters = response.results;
      console.log(this.characters);
    }, (errorFromBackend) => {
      this.error = errorFromBackend.message
      console.log(this.error)
    })
  };

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  };
}
