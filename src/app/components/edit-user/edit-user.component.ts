import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  successMessage: string = '';

  constructor(private activeRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    let username = this.activeRoute.snapshot.paramMap.get('username');
    this.getUserByUsername(username);
  }

  user = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    role: ''
  }

  getUserByUsername(username: any) {
    this.userService.getUserByUsername(username).subscribe((data) => {
      this.user = data;
    })

  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe((data) => {
      this.successMessage = 'User updated successfully!';

      this.user.username = '',
      this.user.password = '',
      this.user.email = '',
      this.user.firstName = '',
      this.user.lastName = '',
      this.user.role = ''


      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    });
  }
}








