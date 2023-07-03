import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RoutineComponent } from './routine/routine.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'routine', component: RoutineComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
