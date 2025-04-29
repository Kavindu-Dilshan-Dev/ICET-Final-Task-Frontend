import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { NgFor } from '@angular/common';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-update-employee',
  imports: [NgFor],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {



  newEmployee: Employee = {
    name: '',
    email: '',
    department: '',
    createdDate: '',
    lastUpdatedDate: ''
  }
    ngOnInit(): void {
      this.getAllEmployees();
    }

    public listOfEmployees: Employee[] = [];

    constructor(private readonly employeeService: EmployeeService){}
  
    getAllEmployees(){
      fetch("http://localhost:8080/api/employees")
      .then(res => res.json())
      .then(data => {
          this.listOfEmployees  = data;
      })
    
    }

    updateEmployee() {
      this.employeeService.addEmployee(this.newEmployee).subscribe({
        next: (response) => {
          console.log('employee added success',response);
        },
        error: (error) => {
          console.error('Error adding employee:', error);
        },
      });
    }
}
