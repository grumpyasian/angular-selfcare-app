import { Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoutineCardComponent } from './routine-card/routine-card.component';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})

export class RoutineComponent {
  constructor(private dialog: MatDialog, private elementRef: ElementRef) {}
  
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

