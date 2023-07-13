import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CardService {
  private cardsKey = 'myCards';
  private cardsChanged = new EventEmitter<void>();

  constructor() {}

  addCard(card: string): void {
    const storedCards = this.getCardsFromStorage();
    storedCards.push(card);
    this.saveCardsToStorage(storedCards);
    this.cardsChanged.emit(); // Emit event to notify changes
  }

  deleteCard(card: string): void {
    const storedCards = this.getCardsFromStorage();
    const index = storedCards.indexOf(card);
    if (index !== -1) {
      storedCards.splice(index, 1);
      this.saveCardsToStorage(storedCards);
      this.cardsChanged.emit(); // Emit event to notify changes
    }
  }

  getCards(): string[] {
    return this.getCardsFromStorage();
  }

  onCardsChanged(): EventEmitter<void> {
    return this.cardsChanged;
  }

  private getCardsFromStorage(): string[] {
    const storedCards = localStorage.getItem(this.cardsKey);
    return storedCards ? JSON.parse(storedCards) : [];
  }

  private saveCardsToStorage(cards: string[]): void {
    localStorage.setItem(this.cardsKey, JSON.stringify(cards));
  }
}
