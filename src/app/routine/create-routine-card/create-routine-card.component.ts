import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardService, DateType } from 'src/app/card.service';

@Component({
  selector: 'app-create-routine-card',
  templateUrl: './create-routine-card.component.html',
  styleUrls: ['./create-routine-card.component.scss']
})
export class CreateRoutineCardComponent {
  newCard = '';
  dateType: DateType = DateType.Custom;
  time: string = new Date().toLocaleTimeString(); // Get the current time as a string

  constructor(private cardService: CardService, private dialog: MatDialog) {}

  addCard(): void {
    this.cardService.addCard(this.newCard, this.dateType, this.time);
    this.newCard = ''; // Reset the input after adding the card
    this.dateType = DateType.Custom; // Reset the dateType to Custom
    this.time = new Date().toLocaleTimeString(); // Reset the time to the current time
  }
}
