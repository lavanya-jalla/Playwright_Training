export interface createEmployeeResponse {
    status: string;
    data: Employee;
    message: string;
}
export interface Employee {
    id: number;
    name: string;
    salary: string;
    age: string;
}