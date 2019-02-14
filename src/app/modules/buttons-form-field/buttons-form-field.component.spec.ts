import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsFormFieldComponent } from './buttons-form-field.component';

describe('ButtonsFormFieldComponent', () => {
  let component: ButtonsFormFieldComponent;
  let fixture: ComponentFixture<ButtonsFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
