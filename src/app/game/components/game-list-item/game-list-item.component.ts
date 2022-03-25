import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../models/Game';

@Component({
  selector: 'val-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss'],
})
export class GameListItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() game!: Game;

  @Output() onGameClicked = new EventEmitter<Game>();

  selectGame(game: Game): void {
    // console.log(this.game);
    // console.log(game);
    this.onGameClicked.emit(game);
  }
}
