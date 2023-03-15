import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './maps/main/main.component';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";


const routes: Routes = [
  { path:'',
  loadChildren: () => import ('./auth/auth-routing.module').then( m => m.AuthRoutingModule)
  },
  { path: 'maps', component: MainComponent, ...canActivate(()=>redirectUnauthorizedTo(['/register'])) },
  { path:'**', redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
