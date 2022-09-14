import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl + '/api/users');
  }

  addUser(addUserRequest: User): Observable<User> {
    return this.http.post<User>(this.baseApiUrl + '/api/users', addUserRequest)
  }

  getUser(id: Number): Observable<User> {
    return this.http.get<User>(this.baseApiUrl + '/api/users/' + id);
  }

  updateUser(id: Number, updateUserRequest: User): Observable<User> {
    return this.http.put<User>(this.baseApiUrl + '/api/users/' + id, updateUserRequest);
  }

  deleteUser(id: Number): Observable<User> {
    return this.http.delete<User>(this.baseApiUrl + '/api/users/' + id);
  }
}
