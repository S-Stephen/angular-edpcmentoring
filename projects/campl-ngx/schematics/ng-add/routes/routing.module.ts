import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from '../home/home.component';
// import { MatchComponent } from '../match/match.component';

const routes: Routes = [
//  { path: 'home', component: HomeComponent },
//  { path: 'match', component: MatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class RoutingModule {}
