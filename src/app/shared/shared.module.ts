import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    DataTableComponent,
  ]
})
export class SharedModule { }
