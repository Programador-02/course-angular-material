import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { MatDialog, MatDialogConfig } from "@angular/material";

import { EmployeeService } from "../../../services/employee.service";
import { DialogService } from "../../../services/dialog.service";
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeComponent } from '../employee/employee.component';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  listData: MatTableDataSource<any>
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'departmentName', 'actions']
  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  searchKey: string

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      list => {
        let array = list.map(item => {
          let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department'])
          return {
            $key: item.key,
            departmentName,
            ...item.payload.val()
          }
        })
        this.listData = new MatTableDataSource(array)
        this.listData.sort = this.sort
        this.listData.paginator = this.paginator
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1
          })
        }
      }
    )
  }

  onSearchClear() {
    this.searchKey = ""
    this.applyFilter()
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase()
  }

  onCreate() {
    this.employeeService.initializeFormGroup()
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '60%'
    this.dialog.open(EmployeeComponent, dialogConfig)
  }

  onEdit(row) {
    this.employeeService.populateForm(row)
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '60%'
    this.dialog.open(EmployeeComponent, dialogConfig)
  }

  onDelete($key) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?').afterClosed().subscribe( res => {
      if (res) {
        this.employeeService.deleteEmployee($key)
        this.notificationService.warn('! Deleted successfully')
      }
    })
    /*if (confirm('Are you sure to delete this record ?')) {
      this.employeeService.deleteEmployee($key)
      this.notificationService.warn('! Deleted successfully')
    }*/
  }

}
