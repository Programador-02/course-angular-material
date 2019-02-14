import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsFormFieldComponent, DialogOverviewExampleDialog } from './modules/buttons-form-field/buttons-form-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './material.module';
import { FormsAngularMaterialComponent } from './modules/forms-angular-material/forms-angular-material.component';
import { ReactiveFormsComponent } from './modules/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsFormFieldComponent,
    FormsAngularMaterialComponent,
    DialogOverviewExampleDialog,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
