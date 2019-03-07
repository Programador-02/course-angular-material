import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../../../services/employee.service";
import { DepartmentService } from "../../../services/department.service";
import { NotificationService } from "../../../services/notification.service";
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private service: EmployeeService,
    private departmentService: DepartmentService,
    private notification: NotificationService,
    private dialogRef: MatDialogRef<EmployeeComponent>) { }

  ngOnInit() {
    this.service.getEmployees()
  }

  onClear() {
    this.service.form.reset()
    this.service.initializeFormGroup()
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value)
        this.service.insertEmployee(this.service.form.value)
      else
        this.service.updateEmployee(this.service.form.value)
      this.onClear()
      this.notification.success(':: Submited successfully')
      this.onClose()
    }
  }

  onClose() {
    this.service.form.reset()
    this.service.initializeFormGroup()
    this.dialogRef.close()
  }

}
