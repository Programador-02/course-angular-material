import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/user-name.validator';
import { passwordValidator } from 'src/app/shared/password.validator';
import { ErrorStateMatcher } from '@angular/material';

/** Error when the parent is invalid */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty) && (control.touched);
    const invalidParent = !!(control && control.parent && control.parent.hasError('misMatch') && control.parent.dirty);

    return (invalidCtrl || invalidParent) || (control.untouched && form.submitted) || (control.touched && control.hasError('required'))
  }
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  errorMatcher = new MyErrorStateMatcher()

  registrationForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/), forbiddenNameValidator(/admin/)]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    address: this.formBuilder.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  }, {validator: passwordValidator})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Cleudo',
      address: {
        city: 'Xoró Limão',
        state: 'Ceará'
      }
    })
  }

}
