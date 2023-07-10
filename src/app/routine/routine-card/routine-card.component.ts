import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-routine-card',
  templateUrl: './routine-card.component.html',
  styleUrls: ['./routine-card.component.scss']
})

export class RoutineCardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
