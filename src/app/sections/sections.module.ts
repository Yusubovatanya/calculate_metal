import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { MaterialModule } from '../material/material.module';
import { ThemeModule } from '../theme/theme.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';


@NgModule({
  declarations: [SectionsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SectionsRoutingModule,
    ThemeModule,
    MiscellaneousModule, 
  ]
})
export class SectionsModule { }
