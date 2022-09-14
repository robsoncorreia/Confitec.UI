import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escolaridade } from 'src/app/models/escolaridade.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  addUserRequest: User = {
    id: 0,
    primeiroNome: '',
    sobreNome: '',
    email: '',
    dataNascimento: new Date,
    escolaridade: 0
  }
  
  escolaridade ;
  
  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router) { 
    this.escolaridade = Object.values(Escolaridade);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.usersService.getUser(Number.parseInt(id))
            .subscribe({
              next: (user) => {
                this.addUserRequest = user;
              }
            });
        }
      }
    });
  }

  updateUser() {
    this.usersService.updateUser(this.addUserRequest.id, this.addUserRequest)
      .subscribe({
        next: (response) => {
          this.router.navigate(['users']);
        }
      });
  }
  deleteUser(id: Number){
    return this.usersService.deleteUser(id)
    .subscribe({
      next: (response) =>{
         this.router.navigate(['users']);
      }
    });
  }
}
