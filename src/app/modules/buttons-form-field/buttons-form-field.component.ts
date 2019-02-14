import { Component, Inject } from '@angular/core';
import { User } from '../../user';
import {FormControl, Validators} from '@angular/forms';
import { EnrollmentService } from '../../services/enrollment.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  error: string;
}

@Component({
	selector: 'app-buttons-form-field',
	templateUrl: './buttons-form-field.component.html',
	styleUrls: ['./buttons-form-field.component.scss']
})
export class ButtonsFormFieldComponent {

	topics = ['Angular', 'React', 'Vue']

	//userModel = new User('dasds', 'adsa@dasd', 1234567890, 'Angular', 'morning', false)
	userModel = new User('', '', null, '', 'morning', false)

	topic = new FormControl('', [Validators.required])
	
	submited: boolean = false

	errorMsg: string;

	constructor(private _enrollmentService: EnrollmentService, public dialog: MatDialog) { }

	onSubmit() {
		this.submited = true
		this._enrollmentService.enroll(this.userModel)
			.subscribe(
				data => console.log('Success!', data),
				error => {this.errorMsg = error.statusText, this.openDialog()}
			)
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogOverviewExampleDialog,{
			data: {
				error: this.errorMsg
			}
		});
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-error.html',
})
export class DialogOverviewExampleDialog {
	constructor(@Inject(MAT_DIALOG_DATA) public error: DialogData) {}
}