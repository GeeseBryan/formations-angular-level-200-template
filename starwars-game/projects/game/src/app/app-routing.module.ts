import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { StatisticsComponent } from 'statistics';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'statistics',
  component: StatisticsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
