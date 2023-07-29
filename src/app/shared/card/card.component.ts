import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user!:User
  @Output() DeleteUserById =  new EventEmitter<number>()


  constructor(private router:Router, private translate:TranslateService) { }

  ngOnInit(): void {
  }

  editUser(id:number) {
  this.router.navigateByUrl(`editUser/${id}`)
  }

  deleteUser(id:number){
    Swal.fire({
      title: this.translate.instant('sure'),
      text: this.translate.instant('deleteData'),
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: this.translate.instant('cancel'),
      confirmButtonText:  this.translate.instant('removed')
    }).then((result) => {
      if (result.isConfirmed) {
        this.DeleteUserById.emit(id)
        Swal.fire(
          this.translate.instant('delete'),
          this.translate.instant('successfullyRemoved'),
          'success'
        )
      }
    })
  }

}
