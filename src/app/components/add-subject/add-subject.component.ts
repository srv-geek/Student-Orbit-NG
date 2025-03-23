import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {

  successMessage: string = '';

  constructor(private subjectService: SubjectService) { }

  subject = new FormGroup({
    name: new FormControl(),
    assignedFaculty: new FormControl(),
  })

  addSubject() {
    this.subjectService.addSubject(this.subject.value).subscribe((data) => {
      this.successMessage = 'Subject registered successfully!';
      this.subject.reset();
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);

    });
  }

}
