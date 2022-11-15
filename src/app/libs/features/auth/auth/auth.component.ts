import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthType} from "../models/auth.model";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {LoginComponent} from "../components/login/login.component";
import {SignupComponent} from "../components/signup/signup.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, LoginComponent, SignupComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  componentType?: AuthType;

  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => {
      debugger
      (this.componentType = value['TYPE'])
    });
  }

}
