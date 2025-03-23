import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  addStudent(student: any): Observable<any> {
    const apiUrl = 'http://localhost:8080/student/add-student';
    return this.http.post(apiUrl, student);
  }

  getAllStudents(): Observable<any> {
    const apiUrl = 'http://localhost:8080/student/get-all-students';
    return this.http.get(apiUrl);
  }

  deleteStudent(id: any): Observable<any> {
    const apiUrl = `http://localhost:8080/student/delete-student/${id}`;
    return this.http.delete(apiUrl, {responseType: 'text'});
  }

  getStudenytById(id: any): Observable<any> {
    const apiUrl = `http://localhost:8080/student/get-student-by-id/${id}`;
    return this.http.get(apiUrl);
  }

  updateStudent(student: any): Observable<any> {
    const apiUrl = 'http://localhost:8080/student/update-student';
    return this.http.put(apiUrl, student);
  }
}
