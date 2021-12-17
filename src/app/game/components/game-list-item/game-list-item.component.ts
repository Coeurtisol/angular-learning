import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'val-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss'],
})
export class GameListItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() game: any;

  @Output() onGameClicked = new EventEmitter();

  selectGame(game: any) {
    // console.log(this.game);
    // console.log(game);
    this.onGameClicked.emit(game);
  }
}
