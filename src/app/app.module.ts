import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule }   from '@angular/forms';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
const appRoutes: Routes = [
  { path: 'employee/list', component: EmployeeDetailsComponent },
  { path: '', redirectTo: 'employee/list',pathMatch: 'full'},
  {path: 'employee/:id', component:EmployeeProfileComponent},
  {path: 'create/employee', component:CreateEmployeeComponent},
  {path: 'update/employee/:id', component:UpdateEmployeeComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeProfileComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
