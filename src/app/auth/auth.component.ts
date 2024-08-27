import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, FormsModule, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  loginObj: any = {
    "username": "",
    "password": "" 
  }

  http = inject(HttpClient)
  authService = inject(AuthService)

  constructor(private router: Router) { } 

  login() {
    return this.http.post('http://localhost:3000/auth/login', this.loginObj).subscribe((res:any)=>{
      this.authService.storeJwtToken(res.token)
      localStorage.setItem('username', this.loginObj.username)
      this.router.navigate(['/chat'])
    }, error => {
      alert('Login error')
    })
  }

  register() {
    return this.http.post('http://localhost:3000/user', this.loginObj).subscribe((res:any)=>{
      this.authService.storeJwtToken(res.token)
      localStorage.setItem('username', this.loginObj.username)
      this.router.navigate(['/message'])
  }, error => {
    alert('Register error')
  })
}

}
