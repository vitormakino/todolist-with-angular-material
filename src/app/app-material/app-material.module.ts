import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdMenuModule,
  MdCardModule,
  MdFormFieldModule,
  MdInputModule,
  MdCheckboxModule,
  MdListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdFormFieldModule,
    MdInputModule,
    MdCheckboxModule,
    MdListModule
  ]
})
export class AppMaterialModule { }