import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutineCardComponent } from './routine-card/routine-card.component';
import { CardService } from '../card.service';
import { Card, DateType } from '../card.model';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnInit {
  cards: Card[] = [];

  constructor(private dialog: MatDialog, private elementRef: ElementRef, private cardService: CardService) {}

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }

  handleClick(card: Card, event: MouseEvent) {
    // Check if the click target is the mat-icon with class "more-icon"
    const targetElement = event.target as HTMLElement;
    const isMoreIconClicked = targetElement.classList.contains('more-icon');

    // If the click target is not the mat-icon with class "more-icon", open the dialog
    if (!isMoreIconClicked) {
      this.openRoutineCardDialog(card);
    }
  }

  openRoutineCardDialog(card: Card) {
    this.dialog.open(RoutineCardComponent, {
      data: {
        title: card.title,
        time: card.time,
        content: [
          // Customize this content based on your requirements
          // { icon: 'bed', title: 'Make Bed', content: 'Make your bed every morning.' },
          // Add more content items as needed
        ],
      },
    });
  }

  deleteCard(card: Card): void {
    this.cardService.deleteCard(card.id);
  }
}
