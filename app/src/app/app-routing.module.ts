import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StartComponent } from './pages/start/start.component';
import { GesetzeComponent } from './pages/gesetze/gesetze.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'start/document/:id',
    component: StartComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
