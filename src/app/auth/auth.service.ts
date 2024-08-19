import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN'
  private loggedUser?: string
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false)
  private loginUrl = 'http://localhost:3000/auth/login'
  private signupUrl = 'http://localhost:3000/user'
  http = inject(HttpClient)

  constructor() 
  { }

  login(user: {username: string, password: string}): Observable<any> {
    return this.http.post(this.loginUrl, user).pipe(
      tap(token=>this.doLoginUser(user.username, token))
    )
  }

  doLoginUser(username: string, token: any) {
    this.loggedUser = username
    this.storeJwtToken(token.jwt);
    this.isAuthenticatedSubject.next(true)
  }

  register(user: {username: string, password: string}) {
    return this.http.post(this.signupUrl, user).pipe(
      tap(token=>this.doLoginUser(user.username, token))
    )
  }

  storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt)
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN)
    this.isAuthenticatedSubject.next(false)
  }

  
}
