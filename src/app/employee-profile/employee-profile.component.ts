import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from 'employee';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute) { }
id:string;
employeeList:Employee
  ngOnInit(): void {
    
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
    this.employeeService.getUsersWithId(this.id).subscribe(
      (response)=>{
        console.log(response)
        this.employeeList=response
      }
  
  
    )
      


  }
 

}
