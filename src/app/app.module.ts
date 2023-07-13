import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RoutineComponent } from './routine/routine.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component';
import { IconComponent } from './icon/icon.component';
import { RoutineCardComponent } from './routine/routine-card/routine-card.component';
import { CardService } from './card.service';
import { CreateRoutineCardComponent } from './routine/create-routine-card/create-routine-card.component';


@NgModule({
  declarations: [AppComponent, MenuComponent, RoutineComponent, BottomNavigationComponent, CalendarComponent, TodoComponent, ProfileComponent, IconComponent, RoutineCardComponent, CreateRoutineCardComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MatTabsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule, 
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

