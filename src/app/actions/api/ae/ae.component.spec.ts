import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeComponent } from './ae.component';

describe('AeComponent', () => {
  let component: AeComponent;
  let fixture: ComponentFixture<AeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
