import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalPopupComponent, CardComponent } from './component';
import { Util } from './service/Util.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalPopupComponent,
    CardComponent
  ],
  declarations : [
     ModalPopupComponent,
     CardComponent
  ],
  providers : [
    Util
  ]
})
export class SharedModule { }
