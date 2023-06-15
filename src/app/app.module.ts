import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RoutineComponent } from './routine/routine.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, MenuComponent, RoutineComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MatTabsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

