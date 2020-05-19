import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { MessagesComponent } from '../messages/messages.component';
//import { MatchComponent } from "../match/match.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "test/messages", component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
