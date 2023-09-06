import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { StarshipsService } from './service/starships.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './service/autentificacion/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsListComponent,
    StarshipDetailComponent,
    WelcomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ StarshipsService,AuthService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
