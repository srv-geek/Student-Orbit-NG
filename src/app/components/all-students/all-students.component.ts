import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  constructor(private studService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  students: any[] = []

  getAllStudents() {
    this.studService.getAllStudents().subscribe((response) => {
      this.students = response
    })
  }

  deleteStudent(id: any) {
    const confirmDelete = confirm('Are you sure you want to delete this student?');

    if (confirmDelete) {
      this.studService.deleteStudent(id).subscribe((data) => {
        alert('Student deleted successfully!');
        this.getAllStudents();
      })
    }
  }

}
