import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartColumnComponent } from './components/chart/chart-column/chart-column.component';
import { ChartComponent } from './components/chart/chart.component';
import * as Highcharts from 'highcharts/highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

// Now init modules:
(<any>HighchartsMore)(Highcharts);
(<any>HighchartsSolidGauge)(Highcharts);
@NgModule({
  declarations: [
    AppComponent,
    ChartColumnComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
