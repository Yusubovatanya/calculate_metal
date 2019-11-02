import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ResultComponent } from './result/result.component';




@NgModule({
  declarations: [ 
    ResultComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ResultComponent,
  ]
})
export class ResultModule { }
