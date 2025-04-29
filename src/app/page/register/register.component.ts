import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

constructor(private readonly employeeService: EmployeeService){}

  newEmployee: Employee = {
    id: 0,
    name: '',
    email: '',
    department: '',
    createdDate: '',
    lastUpdatedDate: ''
  }

  registerUser() {
    this.newEmployee.id++;
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
