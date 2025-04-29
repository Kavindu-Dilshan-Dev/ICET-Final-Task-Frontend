import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewEmployeeComponent } from './page/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './page/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './page/delete-employee/delete-employee.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "view-employee",
        component: ViewEmployeeComponent
    },
    {
        path: "update-employee",
        component: UpdateEmployeeComponent
    },
    {
        path: "delete-employee",
        component: DeleteEmployeeComponent
    }
];
