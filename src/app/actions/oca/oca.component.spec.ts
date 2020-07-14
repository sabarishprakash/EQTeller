import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcaComponent } from './oca.component';

describe('OcaComponent', () => {
  let component: OcaComponent;
  let fixture: ComponentFixture<OcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
