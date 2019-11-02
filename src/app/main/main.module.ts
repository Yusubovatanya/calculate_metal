import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material/material.module';
import { InitialFormModule } from './components/initial-form/initial-form.module';
import { ResultModule } from './components/result/result.module';




@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    InitialFormModule,
    ResultModule,
  ],
  exports: [],
})
export class MainModule { }
