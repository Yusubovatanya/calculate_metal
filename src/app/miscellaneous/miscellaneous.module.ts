import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    MiscellaneousComponent,
  ],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule
  ],
  exports: [
    NotFoundComponent,
  ]
})
export class MiscellaneousModule { }
