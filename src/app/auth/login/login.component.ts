import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  lang:any

  loginForm:FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(1)]],
    password: ['', [Validators.required]]
  })



  constructor(private authService: AuthService, private fb:FormBuilder, private router:Router, public translate: TranslateService ) {

  }

  ngOnInit(): void {

    console.log


    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/dashboard');
    }

    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else {
      this.lang = 'es';
    }
    this.changeLanguage(this.lang)
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  login(): void {

    if (this.authService.login(this.loginForm.controls['username'].value , this.loginForm.controls['password'].value)) {
      this.router.navigateByUrl('/dashboard');
      localStorage.setItem('token', 'true' )

    } else {
      Swal.fire({
        icon: 'error',
        title:  this.translate.instant('upps'),
        text:  this.translate.instant('incorrectCredential'),
      })

    }
  }


}
