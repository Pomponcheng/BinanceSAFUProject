import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing'
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { QueryPageComponent } from './query-page/query-page.component';
// import { EntryService } from './entry.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SubmitPageComponent,
    QueryPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
