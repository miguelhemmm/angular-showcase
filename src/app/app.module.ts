import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LandingComponent } from './landing/landing.component';
import { PackagesComponent } from './packages/packages.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CustomersComponent } from './customers/customers.component';
import { ModalComponent } from './Shared/modal/modal.component';
import { ClickOutsideDirective } from './Shared/Directives/clickOutside.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LandingComponent,
    PackagesComponent,
    FooterComponent,
    CustomersComponent,
    ModalComponent,
    ClickOutsideDirective,
    PokemonGridComponent,
    SidenavComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
