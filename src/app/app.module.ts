import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddProgramComponent } from './add-program/add-program.component';
import { EditProgramComponent } from './edit-program/edit-program.component';
import {ListProgramComponent} from "./list-program/list-program.component";
import {ProgramService} from "./service/program.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListProgramComponent,
    AddProgramComponent,
    EditProgramComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
