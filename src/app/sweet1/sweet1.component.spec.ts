import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweet1Component } from './sweet1.component';

describe('Sweet1Component', () => {
  let component: Sweet1Component;
  let fixture: ComponentFixture<Sweet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sweet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sweet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
