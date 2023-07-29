import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  login(username: string, password: string): boolean {
    if (username.toLocaleLowerCase() === 'usuario' && password.toLocaleLowerCase() === 'usuario') {
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token')
  }


}
