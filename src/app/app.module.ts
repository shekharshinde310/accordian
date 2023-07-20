import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFormComponent } from './header-form/header-form.component';
import { FormsModule } from '@angular/forms';
import { AccDetailComponent } from './acc-detail/acc-detail.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AccItemComponent } from './acc-detail/acc-item/acc-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFormComponent,
    AccDetailComponent,
    AccItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
