import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { FormsModule } from '@angular/forms';
import { ConfiguratorRoutingModule } from './configurator-routing.module'



@NgModule({
  declarations: [ConfiguratorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ConfiguratorRoutingModule
  ]
})
export class ConfiguratorModule { }
