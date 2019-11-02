import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialFormDataComponent } from './initial-form-data/initial-form-data.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    InitialFormDataComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    InitialFormDataComponent,
  ]
})
export class InitialFormModule { }
