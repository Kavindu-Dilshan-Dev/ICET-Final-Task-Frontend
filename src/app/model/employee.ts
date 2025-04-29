export class Employee{
    id: number;
    name: string;
    email: string;
    department: string;
    createdDate: string;
    lastUpdatedDate: string;

    constructor(id: number,name: string,email: string,department: string, createdDate: string,lastUpdatedDate: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.department = department;
        this.createdDate = createdDate;
        this.lastUpdatedDate = lastUpdatedDate;

    }
}