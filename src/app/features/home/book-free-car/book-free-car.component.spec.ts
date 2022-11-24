import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFreeCarComponent } from './book-free-car.component';

describe('BookFreeCarComponent', () => {
  let component: BookFreeCarComponent;
  let fixture: ComponentFixture<BookFreeCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFreeCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFreeCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
