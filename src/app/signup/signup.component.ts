import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../layouts/snackbar/snackbar.component';

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
    MatSnackBarModule,
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
    private authService: AuthService,
    private snackBar: MatSnackBar // ✅ Still needed to pass into SnackbarComponent
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required]],
    });
  }

  onSignupSubmit(): void {
    if (this.signupForm.invalid) return;

    this.isLoading = true;
    const { name, lastname, email, password, repassword } = this.signupForm.value;

    if (password !== repassword) {
      SnackbarComponent.openSnackbar(this.snackBar, 'Passwords do not match!', true); //  Now calling the static method
      this.isLoading = false;
      return;
    }

    this.authService.register(name, lastname, email, password, repassword).subscribe({
      next: (response) => {
        console.log('Signup successful:', response);
        SnackbarComponent.openSnackbar(this.snackBar, 'Signup successful!', false); 
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Signup failed:', error);
        SnackbarComponent.openSnackbar(this.snackBar, 'Signup failed! Please try again.', true); 
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
