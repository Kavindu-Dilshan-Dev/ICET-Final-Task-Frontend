export class Employee{
    name: string;
    email: string;
    department: string;
    createdDate: string;
    lastUpdatedDate: string;

    constructor(name: string,email: string,department: string, createdDate: string,lastUpdatedDate: string){
       
        this.name = name;
        this.email = email;
        this.department = department;
        this.createdDate = createdDate;
        this.lastUpdatedDate = lastUpdatedDate;

    }
}