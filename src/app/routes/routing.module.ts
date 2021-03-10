import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { MessagesComponent } from '../messages/messages.component';
import { TableComponent } from '../table/table.component';
import { FormfieldsComponent } from '../examples/formfields/formfields.component';
import { PagenavComponent } from '../examples/pagenav/pagenav.component';
//import { MatchComponent } from "../match/match.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "test/messages", component: MessagesComponent },
    { path: "test/table", component: TableComponent},
    { path: "examples/formfields", component: FormfieldsComponent},
    { path: "examples/pagenav", component: PagenavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class RoutingModule {}
