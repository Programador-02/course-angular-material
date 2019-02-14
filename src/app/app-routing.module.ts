import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ButtonsFormFieldComponent} from './modules/buttons-form-field/buttons-form-field.component';
import {FormsAngularMaterialComponent} from './modules/forms-angular-material/forms-angular-material.component';
import { DialogOverviewExampleDialog } from "./modules/buttons-form-field/buttons-form-field.component";
import { ReactiveFormsComponent } from "./modules/reactive-forms/reactive-forms.component";

const routes: Routes = [
  {path: 'buttons-form-field', component: ButtonsFormFieldComponent},
  {path: 'forms-angular-material', component: FormsAngularMaterialComponent},
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'buttons-form-field', component: DialogOverviewExampleDialog}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
