import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthType} from "../models/auth.model";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {LoginComponent} from "../components/login/login.component";
import {SignupComponent} from "../components/signup/signup.component";
import {NotificationService} from "../../../modules/notification.service";
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

  constructor(private activatedRoute: ActivatedRoute, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => (this.componentType = value['TYPE']));
  }

}
