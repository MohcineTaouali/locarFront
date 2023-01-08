import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentTwo } from './headerTwo.component';

describe('HeaderComponent', () => {
  let component: HeaderComponentTwo;
  let fixture: ComponentFixture<HeaderComponentTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponentTwo ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponentTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
