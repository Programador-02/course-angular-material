import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteAngularMaterialAppComponent } from './complete-angular-material-app.component';

describe('CompleteAngularMaterialAppComponent', () => {
  let component: CompleteAngularMaterialAppComponent;
  let fixture: ComponentFixture<CompleteAngularMaterialAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteAngularMaterialAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteAngularMaterialAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
