import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialFormDataComponent } from './initial-form-data/initial-form-data.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    InitialFormDataComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    InitialFormDataComponent,
  ]
})
export class InitialFormModule { }
