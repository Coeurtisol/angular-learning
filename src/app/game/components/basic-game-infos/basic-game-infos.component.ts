import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'val-basic-game-infos',
  templateUrl: './basic-game-infos.component.html',
  styleUrls: ['./basic-game-infos.component.scss'],
})
export class BasicGameInfosComponent {
  @Input() game: any;
}
