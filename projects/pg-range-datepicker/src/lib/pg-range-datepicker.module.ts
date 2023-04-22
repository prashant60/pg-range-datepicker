import { NgModule } from '@angular/core';
import { PgRangeDatepickerComponent } from './pg-range-datepicker.component';
import { PickerBoxComponent } from './picker-box/picker-box.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PgRangeDatepickerComponent,
    PickerBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PgRangeDatepickerComponent
  ]
})
export class PgRangeDatepickerModule { }
