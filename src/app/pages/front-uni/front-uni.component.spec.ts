import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontUniComponent } from './front-uni.component';

describe('FrontUniComponent', () => {
  let component: FrontUniComponent;
  let fixture: ComponentFixture<FrontUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontUniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
