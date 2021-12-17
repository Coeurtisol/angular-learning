import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/Model';

@Component({
  selector: 'val-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent {
  game: Game = { id: 1, name: 'Mario', console: 'Nes' };
}
