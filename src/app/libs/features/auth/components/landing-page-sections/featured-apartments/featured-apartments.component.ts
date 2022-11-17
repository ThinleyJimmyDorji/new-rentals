import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nr-featured-apartments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-apartments.component.html',
  styleUrls: ['./featured-apartments.component.scss']
})
export class FeaturedApartmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
