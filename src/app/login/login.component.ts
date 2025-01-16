import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Changed to email
      password: ['', [Validators.required]],
    });
  }

  onLoginSubmit() {
    this.isLoading = true;
    const formData = this.loginForm.value;

    const headers = new HttpHeaders({
      'x-api-key': "I'M_A_FRONTEND_DEVELOPER_AND_I_WANT_TO_JOIN_THE_TEAM" 
    });

    this.http.post('http://localhost:3030/auth/login', formData, { headers }).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        // Store the response (e.g., JWT) in localStorage
        // localStorage.setItem('userToken', response.token); // Assuming your API returns a token
        alert('Log-in successful!');
        this.router.navigate(['']); // Change
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        alert('Login failed! please try again');
      }
    }).add(() => {
      this.isLoading = false;
    });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  forgotPassword() {
    // route to a "forgot password" ???!!!
  }
}