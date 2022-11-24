import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksCarsComponent } from './marks-cars.component';

describe('MarksCarsComponent', () => {
  let component: MarksCarsComponent;
  let fixture: ComponentFixture<MarksCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
