import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaComponent } from './caa.component';

describe('CaaComponent', () => {
  let component: CaaComponent;
  let fixture: ComponentFixture<CaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
