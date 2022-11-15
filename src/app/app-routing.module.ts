import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./libs/features/auth/auth/auth.component";
import {AuthEnum} from "./libs/features/auth/models/auth.model";
import {AuthWrapperComponent} from "./libs/features/auth/auth/auth-wrapper/auth-wrapper.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: '',
    component: AuthWrapperComponent,
    children: [
      {
        path: '',
        component: AuthComponent,
        data: {
          TYPE: AuthEnum.LOGIN
        },
      },
      {
        path: 'signup',
        component: AuthComponent,
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
