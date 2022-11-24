import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleListingCarsComponent } from './title-listing-cars.component';

describe('TitleListingCarsComponent', () => {
  let component: TitleListingCarsComponent;
  let fixture: ComponentFixture<TitleListingCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleListingCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleListingCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
