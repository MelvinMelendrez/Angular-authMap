import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MenuComponent,
    MainComponent
  ],
  exports:[
    MainComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class MapsModule { }
