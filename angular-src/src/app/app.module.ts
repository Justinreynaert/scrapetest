import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import {DataTableModule} from "angular2-datatable";

//services
import { DbService } from './services/db.service';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { ReplaceCommaPipe } from './pipes/replace-comma.pipe';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tracker', component:TrackerComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TrackerComponent,
    DataFilterPipe,
    ReplaceCommaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DataTableModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
