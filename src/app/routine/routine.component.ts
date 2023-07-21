import { Component, ElementRef, OnInit, EventEmitter } from '@angular/core';
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
  cardsChangedEvent: EventEmitter<void>;
  cards: Card[] = []; // Update the type to Card[]

  constructor(private dialog: MatDialog, private elementRef: ElementRef, private cardService: CardService) {
    this.cardsChangedEvent = this.cardService.onCardsChanged();
  }

  ngOnInit() {
    this.cardsChangedEvent.subscribe(() => {
      this.getCards(); // Update the view or fetch latest cards
    });

    // Initial retrieval of cards
    this.getCards();
  }

  getCards() {
    this.cards = this.cardService.getCards();
    // Example: Log the retrieved cards to the console
    console.log('Retrieved Cards:', this.cards);
    // You can also perform other actions based on the retrieved cards
  }

  addCard() {
    const newCardData = 'New Card'; // Example: New card data
    const dateType = DateType.Custom; // Example: Set the dateType (you can customize this based on your requirements)
    const time = new Date().toLocaleTimeString(); // Example: Get the current time as a string

    this.cardService.addCard(newCardData, dateType, time); // Add the new card with data, dateType, and time
  }
  

  deleteCard(card: Card): void {
    this.cardService.deleteCard(card.id); // Delete the specified card by ID
  }
  

  // deleteCard(card: string): void {
  //   this.cardService.deleteCard(card);
  // }
  
  
  handleClick(event: MouseEvent, dialogRoutineCardId: string) {
    const targetElement = event.target as HTMLElement;
    const preventDialogOpening = targetElement.classList.contains('mat-icon');

    if (!preventDialogOpening) {
      this.openDialogRoutineCardById(dialogRoutineCardId);
    }
  }

  openDialogRoutineCardById(dialogRoutineCardId: string) {
    const dialogContent = this.getDialogRoutineCardContent(dialogRoutineCardId);
    if (dialogContent) {
      this.dialog.open(RoutineCardComponent, {
        data: dialogContent
      });
    }
  }

  private getDialogRoutineCardContent(dialogRoutineCardId: string) {
    switch (dialogRoutineCardId) {
      case 'dialogRoutine1':
        return {
          title: 'morning routine',
          time: '9:00-9:30 (30m)'
        };
      case 'dialogRoutine2':
        return {
          title: 'night routine',
          time: '21:00-21:30 (30m)'
        };
      default:
        return null;
    }
  }
}

