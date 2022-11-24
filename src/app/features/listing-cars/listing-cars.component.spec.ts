import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCarsComponent } from './listing-cars.component';

describe('ListingCarsComponent', () => {
  let component: ListingCarsComponent;
  let fixture: ComponentFixture<ListingCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
