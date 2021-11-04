import { MeuFormModule } from './meu-form/meu-form.module';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent],
  imports: [BrowserModule, FormsModule, MeuFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
