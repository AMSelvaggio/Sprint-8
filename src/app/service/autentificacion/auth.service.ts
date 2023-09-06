import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email);
    if (user) {
      throw new Error('Usuario ya registrado');
    }
    users.push({ email, password, loggedIn: false });
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Credenciales incorrectas');
    }
    user.loggedIn = true;
    localStorage.setItem('users', JSON.stringify(users));
  }

  logout() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const loggedInUser = users.find((u: any) => u.loggedIn === true);
    if (loggedInUser) {
      loggedInUser.loggedIn = false;
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
  get isUserLoggedIn(): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return !!users.find((u: any) => u.loggedIn === true);
}

}
