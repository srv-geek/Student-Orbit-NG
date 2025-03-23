import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  successMessage: string = '';

  constructor(private studService: StudentService) { }

  student = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
  });

  addStudent() {
    this.studService.addStudent(this.student.value).subscribe((response) => {
      this.successMessage = 'Student registered successfully!';
      this.student.reset();

      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    })
  }

}



