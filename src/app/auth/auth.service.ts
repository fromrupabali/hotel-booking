import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuthenticated = false;
  get userIsAuthenticated() {
    return this.userAuthenticated;
  }

  constructor() { }

  login() {
    this.userAuthenticated = true;
  }
  logout() {
    this.userAuthenticated = false;
  }
}
