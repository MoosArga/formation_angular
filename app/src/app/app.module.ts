import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationModule } from './features/formation/formation.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './layout/error/error.component';
import { FormationStore } from './shared/store/formation.store';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [FormationStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
