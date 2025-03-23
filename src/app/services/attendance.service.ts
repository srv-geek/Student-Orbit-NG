import { Injectable } from '@angular/core';
import { SubjectService } from './subject.service';
import { StudentService } from './student.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }

  filteredAttendance(user: string, subjectId: number, date: string): Observable<any> {
    const apiUrl = `http://localhost:8080/attendance/get-attendance/${user}/${subjectId}/${date}`;
    return this.http.get(apiUrl);
  }

  allAttendance(): Observable<any> {
    const apiUrl = `http://localhost:8080/attendance/get-all-attendance-records`;
    return this.http.get(apiUrl);
  }


  saveAttendance(data: any): Observable<any> {
    const apiUrl = `http://localhost:8080/attendance/take-attendance`;
    return this.http.post(apiUrl, data);
  }

}
