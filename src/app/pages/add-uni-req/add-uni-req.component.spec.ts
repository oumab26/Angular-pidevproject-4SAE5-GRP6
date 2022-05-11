import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniReqComponent } from './add-uni-req.component';

describe('AddUniReqComponent', () => {
  let component: AddUniReqComponent;
  let fixture: ComponentFixture<AddUniReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUniReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
