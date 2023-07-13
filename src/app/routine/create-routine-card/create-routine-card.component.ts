import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-create-routine-card',
  templateUrl: './create-routine-card.component.html',
  styleUrls: ['./create-routine-card.component.scss']
})

export class CreateRoutineCardComponent {
  newCard: string = '';

  constructor(private cardService: CardService, private dialog: MatDialog){}

  addCard(): void {
    this.cardService.addCard(this.newCard);
    this.newCard = '';
    const storedCards = this.cardService.getCards();
    storedCards.push(this.newCard);
  }
  
}
