import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthType} from "../models/auth.model";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {LoginComponent} from "../components/login/login.component";
import {SignupComponent} from "../components/signup/signup.component";
import {NotificationService} from "../../../modules/notification.service";
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, LoginComponent, SignupComponent, RouterModule, MatCardModule, FlexLayoutModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  componentType?: AuthType;

  constructor(private activatedRoute: ActivatedRoute, private notificationService: NotificationService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    debugger
    debugger
    const data = { email: 'tjd1@selise.ch', password: 'status200' };
    // this.httpClient.post('https://newrentals.tk/api/v1/users', { user: data} ).pipe(tap((response) => {
    //   debugger
    // }, (e) => this.notificationService.error(e?.error?.['errors']?.[0]))).subscribe();
    this.activatedRoute.data.subscribe(value => (this.componentType = value['TYPE']));
  }

}
