import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponentsModule } from './main-components/main-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
