import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true,
  imports: [CommonModule, IonContent, MatButtonModule],
})
export class WelcomeComponent {
  carImage = '/assets/car.png';
  racerImage = '/assets/racer.png';
  logoImage = '/assets/logo.png';
  constructor(private router: Router) {}

  goToLogin(): void {
    console.log("Redirection to login")
    this.router.navigate(['/login']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
