import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkCarsComponent } from './mark-cars.component';

describe('MarkCarsComponent', () => {
  let component: MarkCarsComponent;
  let fixture: ComponentFixture<MarkCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
