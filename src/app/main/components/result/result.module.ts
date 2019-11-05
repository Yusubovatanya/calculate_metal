import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import { MaterialModule } from 'src/app/material/material.module';
import { ResultComponent } from './result/result.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ 
    ResultComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    NgxPrintModule,
  ],
  exports: [
    ResultComponent,
  ]
})
export class ResultModule { }
