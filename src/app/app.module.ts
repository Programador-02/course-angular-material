import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeService } from "./services/employee.service";
import { DepartmentService } from "./services/department.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsFormFieldComponent, DialogOverviewExampleDialog } from './modules/buttons-form-field/buttons-form-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";

import { environment } from "../environments/environment";

import {MaterialModule} from './material.module';
import { FormsAngularMaterialComponent } from './modules/forms-angular-material/forms-angular-material.component';
import { ReactiveFormsComponent } from './modules/reactive-forms/reactive-forms.component';
import { CompleteAngularMaterialAppComponent } from './modules/complete-angular-material-app/complete-angular-material-app.component';
import { EmployeeComponent } from './modules/complete-angular-material-app/employee/employee.component';
import { EmployeesListComponent } from './modules/complete-angular-material-app/employees-list/employees-list.component';
import { MatConfirmDialogComponent } from './modules/complete-angular-material-app/mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsFormFieldComponent,
    FormsAngularMaterialComponent,
    DialogOverviewExampleDialog,
    ReactiveFormsComponent,
    CompleteAngularMaterialAppComponent,
    EmployeeComponent,
    EmployeesListComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    EmployeeService,
    DepartmentService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EmployeeComponent,
    MatConfirmDialogComponent]
})
export class AppModule { }
