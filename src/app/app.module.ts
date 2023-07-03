import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RoutineComponent } from './routine/routine.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, RoutineComponent, BottomNavigationComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MatTabsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

