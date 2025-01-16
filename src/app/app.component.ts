import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'wcr-challenge-frontend';
}

window.addEventListener('orientationchange', () => {
  if (window.orientation === 90 || window.orientation === -90) {
      alert('Landscape mode is not supported. Please rotate your device to portrait.');
      document.body.style.display = 'none'; // Hide content in landscape
  } else {
      document.body.style.display = 'block'; // Show content in portrait
  }
});
