import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalSolutionSectionComponent } from './rental-solution-section.component';

describe('RentalSolutionSectionComponent', () => {
  let component: RentalSolutionSectionComponent;
  let fixture: ComponentFixture<RentalSolutionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RentalSolutionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalSolutionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
