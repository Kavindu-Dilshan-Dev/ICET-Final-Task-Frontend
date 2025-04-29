import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-delete-employee',
  imports: [NgFor],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent implements OnInit {


  
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

      deleteEmployee(id: string) {
       this.employeeService.deleteEmployee(id).subscribe(
        response => {
          console.log('employee deleted successfully', response);
        },
        error => {
        
          console.error('Error deleting employee', error);
        }
       )
      }

   



  
      
}
