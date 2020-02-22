import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarlistComponent } from './carlist/carlist.component';
import { CarmodelsRoutingModule } from './carmodels-routing.module';



@NgModule({
  declarations: [CarlistComponent],
  imports: [
    CommonModule,
    CarmodelsRoutingModule
  ]
})
export class CarmodelsModule { }
