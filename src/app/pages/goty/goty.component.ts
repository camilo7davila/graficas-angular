import { Component, OnInit } from '@angular/core';

import { GameService } from "../../services/game.service";
import { Game } from 'src/app/interfaces/interfaces';
import  Swal  from "sweetalert2";

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = []

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados()
      .subscribe((data) => {
        this.juegos = data;
      })
  }

  votarJuego(juego: Game) {
    this.gameService.votarJuego(juego.id)
      .subscribe((data) => {
        if(data.ok) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Gracias por tu voto a ${juego.name}`,
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${data.mensaje}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

}
