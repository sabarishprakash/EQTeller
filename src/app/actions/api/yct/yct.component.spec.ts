import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YctComponent } from './yct.component';

describe('YctComponent', () => {
  let component: YctComponent;
  let fixture: ComponentFixture<YctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
