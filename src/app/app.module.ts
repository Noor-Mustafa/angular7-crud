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
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { FormsModule } from '@angular/forms';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UsersListWithFiltrationComponent } from './components/users-list-with-filtration/users-list-with-filtration.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    UsersPageComponent,
    UserDetailComponent,
    UsersListWithFiltrationComponent,
    UserDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
