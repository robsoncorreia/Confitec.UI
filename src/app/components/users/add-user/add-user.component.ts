import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  addUserRequest: User = {
    id: 0,
    primeiroNome: '',
    sobreNome: '',
    email: '',
    dataNascimento: new Date,
    escolaridade: 0
  }

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  addUser() {
    this.usersService.addUser(this.addUserRequest)
      .subscribe({
        next: (user) => {
          console.log(user);
          this.router.navigate(['users']);
        }
      });
  }
}
