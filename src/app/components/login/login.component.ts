import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  user = {
    username: '',
    password: ''
  }

  login() {
    this.userService.login(this.user).subscribe((response) => {
localStorage.setItem('user', JSON.stringify(response));
      if (response != null) {
        if (response.role === 'admin') {
          this.router.navigateByUrl('/admin-dashboard');
        } else {
          this.router.navigateByUrl('/faculty-dashboard');
        }
      } else {
        this.errorMessage = 'Invalid Credentials!';
        this.user.username = '';
        this.user.password = '';
  
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    })
  }
}
