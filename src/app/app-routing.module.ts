import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { LandingComponent } from './landing/landing.component';
import { PackagesComponent } from './packages/packages.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent},
  {path: 'packages', component: PackagesComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'pokemon', component: PokemonGridComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


