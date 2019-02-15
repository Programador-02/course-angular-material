import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/user-name.validator';
import { passwordValidator } from 'src/app/shared/password.validator';
import { ErrorStateMatcher } from '@angular/material';
import { RegistrationService } from "../../services/registration.service";

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

	registrationForm: FormGroup

	errorMatcher = new MyErrorStateMatcher()

	get alternateEmails() {
		return this.registrationForm.get('alternateEmails') as FormArray
	}

	constructor(private formBuilder: FormBuilder, private _registrationService: RegistrationService) { }

	ngOnInit() {

		this.registrationForm = this.formBuilder.group({
			userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/), forbiddenNameValidator(/admin/)]],
			email: [''],
			subscribe: [false],
			password: ['', [Validators.required]],
			confirmPassword: ['', [Validators.required]],
			address: this.formBuilder.group({
				city: [''],
				state: [''],
				postalCode: ['']
			}),
			alternateEmails: this.formBuilder.array([])
		}, {validator: passwordValidator})

		this.registrationForm.get('subscribe').valueChanges
			.subscribe(checkedValue => {
				const email = this.registrationForm.get('email')
				if (checkedValue) {
					email.setValidators(Validators.required)
				} else {
					email.clearValidators()
				}
				email.updateValueAndValidity()
			})
	}

	addAlternateEmail() {
		this.alternateEmails.push(this.formBuilder.control(''))
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
	
	onSubmit() {
		this._registrationService.register(this.registrationForm.value)
			.subscribe(
				response => console.log('Success', response),
				error => console.log('Error', error)
			)
	}

}
