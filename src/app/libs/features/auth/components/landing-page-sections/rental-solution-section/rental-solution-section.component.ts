import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nr-rental-solution-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rental-solution-section.component.html',
  styleUrls: ['./rental-solution-section.component.scss']
})
export class RentalSolutionSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
