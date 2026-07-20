export interface getAllEmployees{
    status:string,
    data:employeeData[]

    
}
export interface employeeData{
    id:number,
    employee_name:string,
    employee_salary:string,
    employee_age:string,
    profile_image:string
    
}
