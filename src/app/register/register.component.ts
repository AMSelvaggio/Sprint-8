
import { Component } from '@angular/core';
import { AuthService } from '../service/autentificacion/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(private authService: AuthService) { }

  register() {
    try {
      this.authService.register(this.email, this.password);
      console.log('Registrado con exito!');
      alert('Registrado con éxito! Tu contraseña es: ' + this.password)
    }  catch (error) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        this.errorMessage = error.message as string; 
      } else {
        this.errorMessage = 'A ocurrido un error';
      }
    
  }
}
}
