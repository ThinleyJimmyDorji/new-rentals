import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedApartmentsComponent } from './featured-apartments.component';

describe('FeaturedApartmentsComponent', () => {
  let component: FeaturedApartmentsComponent;
  let fixture: ComponentFixture<FeaturedApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FeaturedApartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
