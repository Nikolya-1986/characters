import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCharactersComponent } from './cards-characters.component';

describe('CardsCharactersComponent', () => {
  let component: CardsCharactersComponent;
  let fixture: ComponentFixture<CardsCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
