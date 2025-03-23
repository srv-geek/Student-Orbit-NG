import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  successMessage: string = '';

  constructor(private activeRoute: ActivatedRoute, private studService: StudentService) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.getStudentById(id);
  }

  student = {
    id: '',
    name: '',
    email: ''
  }

  getStudentById(id: any) {
    this.studService.getStudenytById(id).subscribe((data) => {
      this.student = data;
    })
  }

  updateStudent() {
    this.studService.updateStudent(this.student).subscribe((data) => {
      this.successMessage = 'Student details updated successfully!';

      this.student.id = '';
      this.student.name = '';
      this.student.email = '';

      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    })
  }

}
