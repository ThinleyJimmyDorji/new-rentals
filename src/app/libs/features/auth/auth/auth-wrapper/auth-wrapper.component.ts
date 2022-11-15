import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-auth-wrapper',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
