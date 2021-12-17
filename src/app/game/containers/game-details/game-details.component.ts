import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'val-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent {
  game = { id: 1, name: 'Mario', console: 'nes' };
}
