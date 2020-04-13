import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
  url : string = "http://localhost:5500/employee/"

  getUsers()
{
    return this.http.get<Employee[]>(this.url);
}
getUsersWithId(id:string):Observable<Employee>
{
  console.log(this.url+id)
  console.log(this.http.get<Employee>(this.url+id))
    return this.http.get<Employee>(this.url+id);
}

addEmployee(employee:Employee){
  return this.http.post(this.url,employee)
}

deleteEmployee(id){
  return this.http.delete(this.url+id);
}
updateEmployee(id,employee:Employee){
  return this.http.put(this.url+id,employee)
}


}
