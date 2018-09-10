import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeraComponent } from './pera.component';

describe('PeraComponent', () => {
  let component: PeraComponent;
  let fixture: ComponentFixture<PeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
