import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    const apiurl = 'http://localhost:8080/user/login-user';
    return this.http.post(apiurl, user)
  }

  register(user: any): Observable<any> {
    const apiurl = 'http://localhost:8080/user/register-user';
    return this.http.post(apiurl, user)
  }

  getAllUsers(): Observable<any> {
    const apiurl = 'http://localhost:8080/user/get-all-user';
    return this.http.get(apiurl)
  }

  getAllAdmins(): Observable<any> {
    const apiUrl = "http://localhost:8080/user/get-all-admin";
    return this.http.get(apiUrl);
  }

  getAllFaculty(): Observable<any> {
    const apiUrl = "http://localhost:8080/user/get-all-faculty";
    return this.http.get(apiUrl);
  }

  deleteUser(username:string): Observable<any> {
    const apiurl = `http://localhost:8080/user/delete-user-by-username?username=${username}`;
    return this.http.delete(apiurl, {responseType: 'text'})
  }

  getUserByUsername(username:string): Observable<any> {
    const apiurl = `http://localhost:8080/user/get-user-by-username/${username}`;
    return this.http.get(apiurl)
  }

  updateUser(user: any): Observable<any> {
    const apiurl = 'http://localhost:8080/user/update-user';
    return this.http.put(apiurl, user)
  }
}
