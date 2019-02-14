import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAngularMaterialComponent } from './forms-angular-material.component';

describe('FormsAngularMaterialComponent', () => {
  let component: FormsAngularMaterialComponent;
  let fixture: ComponentFixture<FormsAngularMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsAngularMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
