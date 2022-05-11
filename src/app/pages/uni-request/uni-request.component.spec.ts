import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniRequestComponent } from './uni-request.component';

describe('UniRequestComponent', () => {
  let component: UniRequestComponent;
  let fixture: ComponentFixture<UniRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
