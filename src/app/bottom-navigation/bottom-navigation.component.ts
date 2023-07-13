import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CardService } from '../card.service';
import { CreateRoutineCardComponent } from '../routine/create-routine-card/create-routine-card.component';


@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})

export class BottomNavigationComponent {
  newCard: string = '';

  constructor(private cardService: CardService, private dialog: MatDialog){}

  openCreateCardDialog() {
    this.dialog.open(CreateRoutineCardComponent);
  }
}
