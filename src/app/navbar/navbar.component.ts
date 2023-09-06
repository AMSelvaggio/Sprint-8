import { Component } from '@angular/core';
import { AuthService } from '../service/autentificacion/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) { }

  get isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);  // Redirige al usuario a la página de login después de cerrar sesión.
  }

}
