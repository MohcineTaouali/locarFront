import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleContactUsComponent } from './title-contact-us.component';

describe('TitleContactUsComponent', () => {
  let component: TitleContactUsComponent;
  let fixture: ComponentFixture<TitleContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
