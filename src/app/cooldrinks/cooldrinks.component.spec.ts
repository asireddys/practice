import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooldrinksComponent } from './cooldrinks.component';

describe('CooldrinksComponent', () => {
  let component: CooldrinksComponent;
  let fixture: ComponentFixture<CooldrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooldrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooldrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
