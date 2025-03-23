import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  successMessage: string = '';

  constructor(private activeRoute: ActivatedRoute, private subService: SubjectService) { }

  ngOnInit(): void {

    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.getSubjectById(id);
  }

  subject = {
    id: '',
    name: '',
    assignedFaculty: '',
  }

  getSubjectById(id: any) {
    this.subService.getSubjectById(id).subscribe((data) => {
      this.subject = data;
    })
  }

  updateSubject() {
    this.subService.updateSubject(this.subject).subscribe((data) => {
      this.successMessage = 'Subject updated successfully!';

      this.subject.id = '',
        this.subject.name = '',
        this.subject.assignedFaculty = ''

      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }

    );
  }
}
