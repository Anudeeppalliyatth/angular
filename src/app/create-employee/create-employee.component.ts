import { Component, OnInit } from '@angular/core';
import { Employee } from 'employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee
  constructor(private employeeService:EmployeeService,private router:Router) {
    this.employee=new Employee()
   }
   isAdded:boolean=false
   isSubmit:boolean=false
  ngOnInit(): void {
  }
  addNewEmployee(employee){
    console.log(employee)
    this.employee.name=employee.name
    this.employee.dob=employee.dob
    this.employee.place=employee.place
    console.log(this.employee)

    this.employeeService.addEmployee(this.employee).subscribe((response)=>{
      this.isAdded=true
      this.router.navigate(['/employee/list']);
    })

    
  
    
  }
}
