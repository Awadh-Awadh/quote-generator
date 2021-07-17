import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HeroComponent } from './hero/hero.component';
import { FormComponent } from './form/form.component';
import { ItemComponent } from './item/item.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeroComponent,
    FormComponent,
    ItemComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
