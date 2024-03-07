import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint, ENDPOINT_BASE, EndpointPaths, User } from '~challenge/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(ENDPOINT_BASE + EndpointPaths.get(Endpoint.USERS));
  }
}
