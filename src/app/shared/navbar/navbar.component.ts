import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private authService:AuthService, private router:Router, private translate : TranslateService) { }

  ngOnInit(): void {
  }

  logout(){
      this.authService.logout()
      this.router.navigate(['/login']);
  }

}
