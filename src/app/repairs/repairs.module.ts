import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RepairsComponent } from './repairs/repairs.component';
import { RepairsRoutingModule } from './repairs-routing.module';

@NgModule({
	declarations: [RepairsComponent],
	imports: [CommonModule, FormsModule, RepairsRoutingModule]
})
export class RepairsModule {}
