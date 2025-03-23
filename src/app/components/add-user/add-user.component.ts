import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  successMessage: string = '';

  constructor(private userService: UserService) { }

  user = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    role: new FormControl(),
  })

  registerUser() {
    this.userService.register(this.user.value).subscribe((response) => {
      this.successMessage = 'User registered successfully!';
      this.user.reset();

      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    });
  }

}
