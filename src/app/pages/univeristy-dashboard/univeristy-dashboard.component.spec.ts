import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniveristyDashboardComponent } from './univeristy-dashboard.component';

describe('UniveristyDashboardComponent', () => {
  let component: UniveristyDashboardComponent;
  let fixture: ComponentFixture<UniveristyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniveristyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniveristyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
