import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweet2Component } from './sweet2.component';

describe('Sweet2Component', () => {
  let component: Sweet2Component;
  let fixture: ComponentFixture<Sweet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sweet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sweet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
