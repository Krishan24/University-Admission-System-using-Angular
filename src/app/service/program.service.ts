import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Program} from "../model/program.model";

@Injectable()
export class ProgramService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8090/program';

  getPrograms() {
    /* let program = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(program).delay(5000);*/
    return this.http.get<Program[]>(this.baseUrl);
  }

  getProgramById(id: number) {
    return this.http.get<Program>(this.baseUrl + '/' + id);
  }

  createProgram(program: Program) {
    return this.http.post(this.baseUrl, program);
  }

  updateProgram(program: Program) {
    return this.http.put(this.baseUrl + '/' + program.id, program);
  }

  deleteProgram(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
