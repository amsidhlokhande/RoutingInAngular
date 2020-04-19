import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonlistComponent } from './personlist/personlist.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'personList', component: PersonlistComponent},
  {path: 'personDetails', component: PersondetailsComponent},
  {path: '', redirectTo: '/personList', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [PersonlistComponent, PersondetailsComponent, PageNotFoundComponent];
