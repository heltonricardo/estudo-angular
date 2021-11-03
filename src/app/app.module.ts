import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';

@NgModule({
  declarations: [AppComponent, PrimeiroComponent, SegundoComponent],
  imports: [BrowserModule, AppRoutingModule, CursosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
