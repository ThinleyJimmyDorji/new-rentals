import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthEnum} from "./libs/features/auth/models/auth.model";
import {AuthWrapperComponent} from "./libs/features/auth/auth/auth-wrapper/auth-wrapper.component";
import {LandingPageComponent} from "./libs/features/auth/components/landing-page/landing-page.component";

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'home', pathMatch: 'full', component: LandingPageComponent },
  {
    path: '',
    component: AuthWrapperComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../app/libs/features/auth/auth/auth.component').then((c => c.AuthComponent)),
        data: {
          TYPE: AuthEnum.LANDING
        },
      },
      {
        path: 'login',
        loadComponent: () => import('../app/libs/features/auth/auth/auth.component').then((c => c.AuthComponent)),
        data: {
          TYPE: AuthEnum.LOGIN
        },
      },
      {
        path: 'signup',
        loadComponent: () => import('../app/libs/features/auth/auth/auth.component').then((c => c.AuthComponent)),
        data: {
          TYPE: AuthEnum.SIGN_UP
        },
      }
      ]
  },

  // {
  //   path: '**',
  //   redirectTo: 'login'
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
