import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
  // { path: '', component: AppComponent }, // Default route
  { path: 'login', component: LoginComponent }, // Default route
  { path: 'signup', component: SignupComponent }
  
];
