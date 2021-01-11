import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AppuserComponent } from './appuser/appuser.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { AddreservComponent } from './addreserv/addreserv.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoguserComponent } from './loguser/loguser.component';
import { ReguserComponent } from './reguser/reguser.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
   // AppuserComponent,
    UpdateflightComponent,
    FlightlistComponent,
    AddreservComponent,
    LoguserComponent,
    ReguserComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
