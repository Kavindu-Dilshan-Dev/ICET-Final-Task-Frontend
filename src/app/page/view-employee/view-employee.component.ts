import { Component, NgModule, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-employee',
  imports: [NgFor],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {

  ngOnInit(): void {
   this.getAllEmployees();
  }

  public listOfEmployees: Employee[] = [];

  getAllEmployees(){
    fetch("http://localhost:8080/api/employees")
    .then(res => res.json())
    .then(data => {
        this.listOfEmployees  = data;
    })

  }


}
