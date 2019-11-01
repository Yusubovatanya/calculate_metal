import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material/material.module';
import { InitialFormModule } from './components/initial-form/initial-form.module';
import { ResultTableModule } from './components/result-table/result-table.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    InitialFormModule,
    ResultTableModule,
  ],
  exports: [],
})
export class MainModule { }
