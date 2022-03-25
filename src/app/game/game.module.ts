import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GamesComponent } from './containers/games/games.component';
import { GameDetailsComponent } from './containers/game-details/game-details.component';
import { BasicGameInfosComponent } from './components/basic-game-infos/basic-game-infos.component';
import { GameListItemComponent } from './components/game-list-item/game-list-item.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [GamesComponent, GameDetailsComponent, BasicGameInfosComponent, GameListItemComponent],
  imports: [CommonModule, GameRoutingModule, AngularMaterialModule],
})
export class GameModule {}
