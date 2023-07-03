import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RoutineComponent } from './routine/routine.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'routine', component: RoutineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
