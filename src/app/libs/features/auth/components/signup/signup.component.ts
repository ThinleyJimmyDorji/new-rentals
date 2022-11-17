import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {TranslateModule} from "@ngx-translate/core";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, MatInputModule, MatSelectModule, TranslateModule, MatTooltipModule, MatButtonModule, RouterLinkWithHref],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordInVisibility: { password: boolean, confirmPassword: boolean } = { password: true, confirmPassword: true };
  salutations = ['Mr', 'Mrs'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
