import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from 'employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router: Router) { }

  orderBy:string='id'
  employeeList:Employee[]=[]
  ngOnInit(): void {
    this.employeeService.getUsers().subscribe(
      (response)=>{
        this.employeeList=response
      }


    )
  }
  createEmployee(){
    this.router.navigate(['/create/employee'])
  }
  details(id:number)
  {
    this.router.navigate(['/employee', id]);
  }
  deleteEmployee(id){
    if(confirm("Are you Sure")){
      console.log('true')
      this.employeeService.deleteEmployee(id).subscribe(data => {
        
            })
window.location.reload();     
 }

  }
  updateEmployee(id){
    this.router.navigate(['/update/employee', id]);

  }
  
}
