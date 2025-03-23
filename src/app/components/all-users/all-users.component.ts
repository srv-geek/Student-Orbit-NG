import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  userList: any[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.userList = response;
    });
  }

  deleteUser(username: any) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');

    if (confirmDelete) {
      this.userService.deleteUser(username).subscribe((response) => {
        alert('User deleted successfully!');
        this.getAllUsers();
      });
    }
  }
}
