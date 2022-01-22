import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './Shared/top-nav/top-nav.component';
import { LandingComponent } from './landing/landing.component';
import { PackagesComponent } from './packages/packages.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './Shared/footer/footer.component';
import { CustomersComponent } from './customers/customers.component';
import { ModalComponent } from './Shared/modal/modal.component';
import { ClickOutsideDirective } from './Shared/Directives/clickOutside.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import { SidenavComponent } from './Shared/sidenav/sidenav.component';
import { FormComponent } from './Shared/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertorPipe } from './Shared/convertor-pipe.pipe';
import { AboutComponent } from './about/about.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { addRemoveReducer } from './state/addRemove.reducer';
import { retrieveUsersReducer } from './state/retrieveUsersReducer.reducer';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';

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
    FormComponent,
    ConvertorPipe,
    AboutComponent,
    GalleryGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      users: addRemoveReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
