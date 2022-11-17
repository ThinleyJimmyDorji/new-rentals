import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nr-search-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
