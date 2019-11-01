import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultTableDataComponent } from './result-table-data/result-table-data.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [ 
    ResultTableDataComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ResultTableDataComponent,
  ]
})
export class ResultTableModule { }
