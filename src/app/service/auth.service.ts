import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', {username: username, password: password})
      .pipe(map(program => {
        // login successful if there's a jwt token in the response
        if (program && program.token) {
          // store user details and jwt token in local storage to keep program logged in between page refreshes
          localStorage.setItem('currentProgram', JSON.stringify(program));
        }

        return program;
      }));
  }
}
