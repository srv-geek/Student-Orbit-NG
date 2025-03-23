import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css']
})
export class TakeAttendanceComponent implements OnInit {

  constructor(private subjectService: SubjectService,
    private studentService: StudentService,
    private attendanceService: AttendanceService
  ) { }
  ngOnInit(): void {
    this.getAllSubject();
    this.getAllStudents();

    this.selectedUser = localStorage.getItem('user') || '';
    console.log("Faculty Username:", this.selectedUser);
  }

  subjects: any[] = [];
  students: any[] = [];

  selectedUser:any

  selectedSubject: number = 0;
  selectedDate: string = '';
  selectedTime: string = '';
  selectedStudents: any[] = [];




  getAllSubject() {
    this.subjectService.getAllSubjects().subscribe((res) => {
      this.subjects = res;
    });
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe((res) => {
      this.students = res;
    });

  }

  // Toggle individual student selection
  toggleStudent(studentId: number) {
    if (this.selectedStudents.includes(studentId)) {
      this.selectedStudents = this.selectedStudents.filter(id => id !== studentId);
    } else {
      this.selectedStudents.push(studentId);
    }
  }

  // Toggle all students selection
  toggleAll(event: any) {
    if (event.target.checked) {
      this.selectedStudents = this.students.map(student => student.id);
    } else {
      this.selectedStudents = [];
    }
  }
  changeDate($event: Event) {
    this.selectedDate = ($event.target as HTMLInputElement).value;
  }

  changeSubject($event: Event) {
    this.selectedSubject = Number(($event.target as HTMLSelectElement).value);
  }

  changeTime($event: Event) {
    this.selectedTime = ($event.target as HTMLSelectElement).value;
  }

  convertTo12HourFormat(time: string): string {
    if (!time) return '';

    let [hours, minutes] = time.split(':').map(Number);
    let period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
  }

  submitAttendance() {
    if (!this.selectedSubject || !this.selectedDate || !this.selectedTime || this.selectedStudents.length === 0) {
      alert("Please select subject, date, time, and at least one student!");
      return;
    }

    const selectedStudentsData = this.students.filter(student =>
      this.selectedStudents.includes(student.id)
    );

    const attendanceData = {
      subjectId: this.selectedSubject,
      username: this.selectedUser, // Use stored username
      date: this.selectedDate,
      time: this.convertTo12HourFormat(this.selectedTime),
      students: selectedStudentsData
    };

    console.log('Attendance Data:', attendanceData); // Debugging

    this.attendanceService.saveAttendance(attendanceData).subscribe(() => {
      this.selectedStudents = [];
      alert('✅ Attendance successfully submitted!');
    }, (error) => {
      console.error("Error submitting attendance:", error);
      alert("❌ Failed to submit attendance!");
    });
  }

}
