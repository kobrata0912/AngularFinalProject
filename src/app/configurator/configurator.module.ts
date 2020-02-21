import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [ConfiguratorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ConfiguratorModule { }
