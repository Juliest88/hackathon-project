import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartColumnComponent } from './components/chart/chart-column/chart-column.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartColumnComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
