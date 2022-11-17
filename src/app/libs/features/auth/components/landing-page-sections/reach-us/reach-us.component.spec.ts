import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachUsComponent } from './reach-us.component';

describe('ReachUsComponent', () => {
  let component: ReachUsComponent;
  let fixture: ComponentFixture<ReachUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReachUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
