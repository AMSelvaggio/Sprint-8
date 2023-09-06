import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/autentificacion/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    try {
      this.authService.login(this.email, this.password);
    alert('Ingreso con exito')
      this.router.navigate(['/']);
      this.errorMessage = '';
    } catch (err) {
      if (err instanceof Error) {
        this.errorMessage = err.message;
      } else {
        this.errorMessage = 'Ocurrió un error';
      }
    }
  }
}
