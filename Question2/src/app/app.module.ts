import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';

@NgModule({
  declarations: [
    AppComponent,
    XComponent,
    YComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
