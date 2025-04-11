import { Component, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [NgClass, MatButtonModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: { message: string; isError: boolean }
  ) {}

  closeSnackbar() {
    this.snackBarRef.dismiss();
  }

  
  static openSnackbar(snackBar: MatSnackBar, message: string, isError: boolean): void {
    snackBar.openFromComponent(SnackbarComponent, {
      data: { message, isError },
      duration: 3000,
      panelClass: isError ? 'snackbar-error' : 'snackbar-success',
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
