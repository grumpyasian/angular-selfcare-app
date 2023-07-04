import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
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

@NgModule({
  declarations: [AppComponent, MenuComponent, RoutineComponent, BottomNavigationComponent, CalendarComponent, TodoComponent, ProfileComponent, IconComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MatTabsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

