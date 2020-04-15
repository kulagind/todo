import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FooterComponent } from './footer/footer.component';
import { InversionPercentPipe } from './pipes/inversion-percent.pipe';
import {FilterPipe} from "./pipes/filter.pipe";


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskFormComponent,
    FooterComponent,
    InversionPercentPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
