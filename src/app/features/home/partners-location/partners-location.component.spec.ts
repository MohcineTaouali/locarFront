import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersLocationComponent } from './partners-location.component';

describe('PartnersLocationComponent', () => {
  let component: PartnersLocationComponent;
  let fixture: ComponentFixture<PartnersLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
