import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
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
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  isLoading = false;
  googleLogoPath: string = 'assets/G-logo.png';
  facebookLogoPath: string = 'assets/F-logo.png';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]],
    });
  }

  onSignupSubmit() {
    this.isLoading = true;
    const formData = this.signupForm.value;

    if (formData.password !== formData.repassword) {
      console.error('Passwords do not match!');
      this.isLoading = false
      return;
    }

    const headers = new HttpHeaders({
      'x-api-key': "I'M_A_FRONTEND_DEVELOPER_AND_I_WANT_TO_JOIN_THE_TEAM"
    });

    // Removing the rePassword field before sending
    const { rePassword, ...postData } = formData;

    this.http.post('http://localhost:3030/auth/register', postData, { headers }).subscribe({
      next: (response: any) => {
        console.log('Signup successful:', response);
        alert('signup successful!');
        // redirect to login
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.error('Signup failed:', error);
        alert('signup failed!');
        // Handle signup error (e.g., display error message)
      }
    }).add(() => {
      this.isLoading = false;
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}