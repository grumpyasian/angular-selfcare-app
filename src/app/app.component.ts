import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'selfcare-app';

  constructor(private router: Router) {}
  
  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  navigateToRoutine() {
    this.router.navigate(['/routine']);
  }

  navigateToCalendar() {
    this.router.navigate(['/calendar']);
  }

  navigateToTodo() {
    this.router.navigate(['/todo']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
