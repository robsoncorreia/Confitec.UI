import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Escolaridade } from 'src/app/models/escolaridade.model';
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

  selected: string = '';

  escolaridade;

  constructor(private usersService: UsersService, private router: Router) {
    this.escolaridade = Object.values(Escolaridade);
  }

  ngOnInit(): void {}
  
  addUser() {
    this.usersService.addUser(this.addUserRequest)
      .subscribe({
        next: (user) => {
          console.log(user);
          this.router.navigate(['users']);
        }
      });
  }
 


  selectChangeHandler (event: any) {
    this.selected = event.target.value; 
  }
}
