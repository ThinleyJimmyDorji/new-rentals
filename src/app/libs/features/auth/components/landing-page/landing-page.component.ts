import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchHomeComponent} from "../landing-page-sections/search-home/search-home.component";
import {FaqSectionComponent} from "../landing-page-sections/faq-section/faq-section.component";
import {FeaturedApartmentsComponent} from "../landing-page-sections/featured-apartments/featured-apartments.component";
import {
  RentalSolutionSectionComponent
} from "../landing-page-sections/rental-solution-section/rental-solution-section.component";
import {ReachUsComponent} from "../landing-page-sections/reach-us/reach-us.component";
import {FooterComponent} from "../landing-page-sections/footer/footer.component";
import {NavBarComponent} from "../landing-page-sections/nav-bar/nav-bar.component";

@Component({
  selector: 'nr-landing-page',
  standalone: true,
  imports: [CommonModule, SearchHomeComponent, FaqSectionComponent, FeaturedApartmentsComponent, RentalSolutionSectionComponent, ReachUsComponent, FooterComponent, NavBarComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
