import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppungListEditComponent } from './shopping-list-edit.component';

describe('ShoppungListEditComponent', () => {
  let component: ShoppungListEditComponent;
  let fixture: ComponentFixture<ShoppungListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppungListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppungListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
