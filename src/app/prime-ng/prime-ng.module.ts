import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const primeNgModule = [InputTextModule, InputTextareaModule, AccordionModule, CardModule, ButtonModule, BrowserAnimationsModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primeNgModule
  ],
  exports: [
    ...primeNgModule
  ]
})
export class PrimeNgModule { }
