import {enableProdMode, importProvidersFrom} from '@angular/core';

import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {NotificationService} from "./app/libs/modules/notification.service";
import {AppComponent} from "./app/app.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app/app-routing.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientModule} from "@angular/common/http";
// import {GraphQLModule} from "./app/graphql.module";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    importProvidersFrom(MatSnackBarModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
    // importProvidersFrom(GraphQLModule),
    importProvidersFrom(TranslateModule.forRoot()),
    {
      provide: NotificationService,
      useClass: NotificationService
    },
    // {provide: BaseFacadeService, useClass: BaseFacadeService},
    // {provide: BaseStateService, useClass: BaseStateService},
    {provide: RouterOutlet, useClass: RouterOutlet}]
})
