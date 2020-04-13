import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { Employee } from 'employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router) { }
  id:string
  employeeDetails:Employee
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
    this.employeeService.getUsersWithId(this.id).subscribe(
      (response)=>{
        console.log(response)
        this.employeeDetails=response
      }
  
  
    )
  }
  updateEmployee(employee){
    this.employeeDetails.name=employee.name
    this.employeeDetails.dob=employee.dob
    this.employeeDetails.place=employee.place
    this.employeeService.updateEmployee(this.employeeDetails.id,this.employeeDetails).subscribe((response)=>{
      this.router.navigate(['/employee/list']);
    })

    

  }

}
