import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {NotificationComponent} from "./notification/notification.component";
import {TranslateService} from "@ngx-translate/core";

export declare type alertType = 'success' | 'info' | 'warning' | 'error' | 'question';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private matIconType = {
    success: 'check_circle_outline',
    error: 'error_outline',
    info: 'info',
    warning: 'warning',
    question: 'live_help'
  };

  private snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 5000
  };

  constructor(private snackBar: MatSnackBar, private router: Router, private translate: TranslateService) {
  }

  show(message: string | Array<string>, type: alertType = 'success', translate?: boolean): void {
    if (message instanceof Array) {
      message = this.convertToHtml(message);
    }
    this.snackBar.openFromComponent(
      NotificationComponent,
      Object.assign({}, this.snackBarConfig, {
        data: {
          message: message,
          icon_type: this.matIconType[type],
          icon_color: type + '-color',
          type: type,
          translate: translate
        },
        panelClass: 'snackbar-' + type
      })
    );
  }

  success = (message: string | Array<string>, translate?: boolean): void => this.show(message, 'success', translate);

  error = (message: string | Array<string>, translate?: boolean): void => this.show(message, 'error', translate);

  warning = (message: string | Array<string>, translate?: boolean): void => this.show(message, 'warning', translate);

  info = (message: string | Array<string>, translate?: boolean): void => this.show(message, 'info', translate);

  question = (message: string | Array<string>, translate?: boolean): void => this.show(message, 'question', translate);

  instantTranslate = (key: string): string => this.translate.instant(key);

  convertToHtml(messages: Array<string>): string {
    let message = '';
    messages.forEach((msg, index) => (message += `<div>${index + 1}. ${msg}</div>`));
    return message;
  }
}
