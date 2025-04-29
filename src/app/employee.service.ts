import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  baseUrl: string = "http://localhost:8080/api/employees";

  constructor(private readonly http: HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }


  addEmployee(newEmployee: Employee): Observable<Employee> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Employee>(this.baseUrl, newEmployee, httpOptions);
  }

  updateEmployee(updateEmployee: Employee): Observable<Employee> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Employee>(this.baseUrl, updateEmployee, httpOptions);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

}
