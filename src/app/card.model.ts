export interface Card {
    id: number;
    title: string;
    dateType: DateType;
    time: any;
}

export enum DateType {
    Weekdays = 'weekdays',
    Weekend = 'weekend',
    Custom = 'custom',
}