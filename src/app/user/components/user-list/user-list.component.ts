import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  users!:User[]


  constructor( private userService: UserService, private router:Router, private translate:TranslateService) { }

  ngOnInit(): void {

    if(localStorage.getItem('user')){
      const userAdd :string = localStorage.getItem('user') || ''
      this.users = JSON.parse( userAdd )
    }else {
      this.userService.getUsers().subscribe(resp => {
        localStorage.setItem('user', JSON.stringify(resp))
        this.users = resp
      })
    }


  }

  DeleteUserById(id:number){
   this.users = this.users.filter( user => user.id !== id)
   localStorage.setItem('user', JSON.stringify(this.users))
  }

  createUser(){
    this.router.navigate(['/createUser'])
  }
}
