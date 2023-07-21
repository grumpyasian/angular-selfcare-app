import { Injectable, EventEmitter } from '@angular/core';
import { Card, DateType } from './card.model';

@Injectable()
export class CardService {
  private cardsKey = 'myCards';
  private cardsChanged = new EventEmitter<void>();
  private cards: Card[] = [];
  // private idCounter = 1;

  constructor() {
    const storedCards = this.getCardsFromStorage();
    if (storedCards) {
      this.cards = storedCards;
      // this.updateIdCounter();
    }
  }

  addCard(cardData: string, dateType: DateType, time: string): void {
    const newCard: Card = {
      id: Date.now(),
      title: cardData,
      dateType: dateType,
      time: time,
    };
    this.cards.push(newCard);
    this.saveCardsToStorage();
    this.cardsChanged.next();
  }



  deleteCard(cardId: number): void {
    const index = this.cards.findIndex(card => card.id === cardId);
    if (index !== -1) {
      this.cards.splice(index, 1);
      this.saveCardsToStorage();
      this.cardsChanged.emit(); // Emit event to notify changes
    }
  }

  getCards(): Card[] {
    return this.cards;
  }

  onCardsChanged(): EventEmitter<void> {
    return this.cardsChanged;
  }

  // private updateIdCounter(): void {
  //   const maxId = Math.max(...this.cards.map(card => card.id));
  //   this.idCounter = maxId + 1;
  // }

  private saveCardsToStorage(): void {
    localStorage.setItem(this.cardsKey, JSON.stringify(this.cards));
  }

  private getCardsFromStorage(): Card[] {
    const storedCards = localStorage.getItem(this.cardsKey);
    return storedCards ? JSON.parse(storedCards) : [];
  }
}
export { DateType };

