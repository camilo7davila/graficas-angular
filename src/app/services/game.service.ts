import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { tap, catchError } from "rxjs/operators";

import { Game } from "../interfaces/interfaces";
import { environment } from "../../environments/environment";

const url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = []

  constructor(private http: HttpClient) { }

  getNominados(): Observable<Game[]> {
    if (this.juegos.length === 0) {
      console.log('primera carga')
      return this.http.get<Game[]>(`${url}/goty`)
        .pipe(
          tap(juegos => this.juegos = juegos)
        )
    } else {
      console.log('desde cache')
      return of(this.juegos)
    }
  }

  votarJuego(id: string) {
    return this.http.post(`${url}/goty/${id}`, {})
      .pipe(
        catchError(err => {
          return of(err.error)
        })
      )
  }

}
