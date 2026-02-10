import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  user: User = {
    id: 0,
    name: '',
    email: '',
    phone: 0
  };

  constructor(private userService: UserService,
              private router: Router) {}

  saveUser() {
    this.userService.addUser(this.user).subscribe(() => {
      alert("User Added Successfully!");
      this.router.navigate(['/users']);
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
