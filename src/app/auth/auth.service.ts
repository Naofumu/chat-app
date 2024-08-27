import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN'
  http = inject(HttpClient)

  constructor() 
  { }

  storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt)
  }

  getToken() {
    return localStorage.getItem(this.JWT_TOKEN)
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN)
  }

  
}
