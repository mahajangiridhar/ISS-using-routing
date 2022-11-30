import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairDetailsComponent } from './shared/components/fair-details/fair-details.component';
import { FairListComponent } from './shared/components/fair-list/fair-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDetailsComponent,
    FairListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
