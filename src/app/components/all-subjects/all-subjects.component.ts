import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent implements OnInit {

  constructor(private subService: SubjectService) { }

  ngOnInit(): void {
    this.getAllSubjects();
  }

  subjects: any[] = [];

  getAllSubjects() {
    this.subService.getAllSubjects().subscribe((response) => {
      this.subjects = response;
    });
  }

  deleteSubject(id: any) {
    const confirmDelete = confirm('Are you sure you want to delete this subject?');

    if (confirmDelete) {
      this.subService.deleteSubject(id).subscribe((response) => {
        alert('Subject deleted successfully!');
        this.getAllSubjects();
      });
    }
  }
}
