import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreservComponent } from './addreserv.component';

describe('AddreservComponent', () => {
  let component: AddreservComponent;
  let fixture: ComponentFixture<AddreservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
