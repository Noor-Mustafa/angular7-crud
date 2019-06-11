import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

/*
 * App Routes 
 */
import { AppRoutingModule } from './routing/app-routing.module';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    UsersPageComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
