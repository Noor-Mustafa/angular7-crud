import { NgModule } from '@angular/core';

/**
 * Pages
 */
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { UsersPageComponent } from '../pages/users-page/users-page.component';

/**
 * @imports according to Application Requirements
 */
import { RouterModule, Routes } from '@angular/router';

/**
 * Routes Configuration
 */
const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'CRUD' }
  },
  {
    path: 'users',
    component: UsersPageComponent,
    data: { title: 'CRUD' }
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: false}, /** debugging purposes only **/
      { useHash: true, scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
