import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import Swal from 'sweetalert2'
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Output() CreateUser =  new EventEmitter<number>()

  userStorage:any[] = []
  isEdit:boolean = false
  user!:User

  userForm:FormGroup = this.fb.group({
    name: ['', [Validators.required,]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    website:['', [Validators.required]],
    id:[ , ]
  })

  constructor(private fb:FormBuilder, private router:Router, private activateRoute:ActivatedRoute, private translate:TranslateService) {
  }

  ngOnInit(): void {

    const userAdd :string = localStorage.getItem('user') || ''
    this.userStorage = JSON.parse( userAdd )

    if(this.router.url.includes('editUser')){
      this.activateRoute.params.subscribe({
        next: ({ id }) => {
          this.user = this.userStorage.filter( user => user.id == id)[0]
          this.userForm.setValue({
            name : this.user.name,
            username: this.user.username,
            email: this.user.email,
            website: this.user.website,
            id:this.user.id
          })
          this.isEdit = true
        },
      });
    }
  }

  back(){
    this.router.navigate(['/users'])
  }

  save(){

    if( this.isEdit){
      this.userStorage.splice( this.userStorage.findIndex( (user) => user.id === this.user.id), 1, this.userForm.value)
      localStorage.setItem('user', JSON.stringify(this.userStorage))
      Swal.fire({
        icon: 'success',
        title:  this.translate.instant('good'),
        text: this.translate.instant('correctlyEdit')
      })
      this.router.navigate(['/users'])

    } else {

      if(this.userStorage.length === 0) {
        this.userForm.controls['id'].setValue(1)
      } else {
        this.userForm.controls['id'].setValue( this.userStorage[this.userStorage.length -1].id + 1 )
      }

      this.userStorage.push(this.userForm.value)
      localStorage.setItem('user', JSON.stringify(this.userStorage))
      this.userForm.reset()
      Swal.fire({
        icon: 'success',
        title: this.translate.instant('good'),
        text: this.translate.instant('successfullyCreated')
      })
      this.router.navigate(['/users'])

    }
  }
}
