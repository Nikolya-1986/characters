import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, from, Observable, throwError } from 'rxjs';
import { switchMap, tap, expand, catchError, retry } from "rxjs/operators";

import { CharactersDTO } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly BASE_URL =  "https://rickandmortyapi.com/api";
  
  constructor(
    private httpClient: HttpClient
  ) { }

  private errorsBackend(errorHttp: HttpErrorResponse) {
    let message = '';
    if(errorHttp.error instanceof ErrorEvent) { 
        message = errorHttp.error.message;
    } else {
        message = `Error Code: ${errorHttp.status}\nMessage: ${errorHttp.message}`;
    }
    console.log(message);
    return throwError(errorHttp);
  }

  private getCharactersPage(url: string): Observable<CharactersDTO> {
    return from(fetch(url)).pipe(
        switchMap((result) => result.json()),
    );
  };

  public getAllCharacters(): Observable<CharactersDTO> {
    let characters = [];
    return this.getCharactersPage(`${this.BASE_URL}/character`).pipe(
      tap(response => characters = [...response.results]),
      retry(3),
      expand((prev) => prev.info.next ? this.getCharactersPage(prev.info.next) : EMPTY),
      catchError(this.errorsBackend.bind(this))
    )
  };
}