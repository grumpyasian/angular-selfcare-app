import { Component } from '@angular/core';

@Component({
  selector: 'app-routine-card',
  templateUrl: './routine-card.component.html',
  styleUrls: ['./routine-card.component.scss']
})

export class RoutineCardComponent {
  // When you click on the card expect on 3-dot icon, it will open the routine card. 
  onCardClick(event: MouseEvent) {
    const clickElement = event.target as HTMLElement;

    if (clickElement.classList.contains('mat-icon')) {
      // Disable open routine card and show e.g settings
      event.preventDefault();
    } else {
      // Make the routine card appear and blur the routine-tab.  
      // window.location.href = "https://www.figma.com";
    }
  }
}
