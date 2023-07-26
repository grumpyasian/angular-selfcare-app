import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-routine-card',
  templateUrl: './routine-card.component.html',
  styleUrls: ['./routine-card.component.scss']
})
export class RoutineCardComponent {
  newTodoText: string = ''; // This will hold the text of the new todo
  showAddTodoInput: boolean = false; // Whether to show the input field for adding a new todo

  constructor(
    public dialogRef: MatDialogRef<RoutineCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // Method to add the new todo to the card's content
  addTodo() {
    // Here you would need to update this logic based on your card structure
    const newTodo = { icon: 'todo_icon', title: this.newTodoText };
    this.data.content.push(newTodo);
    this.newTodoText = ''; // Reset the input field after adding the todo
    this.showAddTodoInput = false; // Hide the input field after adding the todo
  }
}
