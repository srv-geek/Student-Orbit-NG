import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  addSubject(subject: any): Observable<any> {
   const apiurl ='http://localhost:8080/subject/add-subject';
    return this.http.post(apiurl, subject);
  }

  getAllSubjects(): Observable<any> {
    const apiurl = 'http://localhost:8080/subject/get-all-subjects';
    return this.http.get(apiurl);
  }

  deleteSubject(id : any): Observable<any> {
    const apiurl = `http://localhost:8080/subject/delete-subject/${id}`;
    return this.http.delete(apiurl, {responseType: 'text'});
  }

  getSubjectById(id: any): Observable<any> {
    const apiurl = `http://localhost:8080/subject/get-subject-by-id/${id}`;
    return this.http.get(apiurl);
  }

  updateSubject(subject: any): Observable<any> {
    const apiurl = 'http://localhost:8080/subject/update-subject';
    return this.http.put(apiurl, subject);
  }
}
