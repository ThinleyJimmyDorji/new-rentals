import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: {type: string, iconColor: string, iconType: string, message: string, translate?: boolean},
    private SnackBarRef: MatSnackBarRef<NotificationComponent>
  ) {}

  ngOnInit(): void {
  }

  closeSnackbar(): void {
    this.SnackBarRef.dismiss();
  }

}
