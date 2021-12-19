import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/Model';
import { Router } from '@angular/router';

@Component({
  selector: 'val-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gameList: Game[] = [
    { id: 1, name: 'mario', console: 'Nes' },
    { id: 2, name: 'spyro', console: 'PlayStation 1' },
    { id: 3, name: 'medievil', console: 'PlayStation 1' },
    { id: 4, name: 'super smash bros melee', console: 'GameCube' },
    { id: 5, name: 'ratchet et clank', console: 'PlayStation 2' },
    { id: 6, name: 'crash bandicoot', console: 'PlayStation 1' },
  ];

  showDetails(game: Game): void {
    console.log(game);
    this.router.navigate(['/games', game.id, 'details']);
  }
}
