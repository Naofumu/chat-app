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
      alert('Login success')
      this.authService.storeJwtToken(res.token)
      alert(localStorage.getItem("JWT_TOKEN"))
      this.router.navigate(['/message'])
    })
  }

  register() {
    return this.http.post('http://localhost:3000/user', this.loginObj).subscribe((res:any)=>{
      alert('Login success')
      this.authService.storeJwtToken(res.token)
      alert(localStorage.getItem("JWT_TOKEN"))
      this.router.navigate(['/message'])
  })
}

  /*username = ''
  password = ''
  authService = inject(AuthService)
  router = inject(Router)

  login(event: Event) {
    event.preventDefault()
    console.log(`Login:${this.username} / ${this.password}`)
    this.authService.login({
        username: this.username,
        password: this.password
      }).subscribe(() => {
        alert('login success')
        this.router.navigate(['/message'])
      })
  }





 /* loginForm: FormGroup;
  registerForm: FormGroup;
  isRegistering = false;

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value
      this.authService.login(username, password).subscribe(
        (response) => {
          this.authService.storeJwtToken(response.token);  
          this.router.navigate(['/message']);
        },
        (error) => {
          console.error(error)
        }
      );
    }
  }

  register() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value
      this.authService.register(username, password).subscribe(
        (response) => {
          this.authService.storeToken(response.token);  
          this.router.navigate(['/message']);
        },
        (error) => {
          console.error(error)
        }
      );
    }
  }
  toggleRegistration() {  
    this.isRegistering = !this.isRegistering;  
  } */
}
