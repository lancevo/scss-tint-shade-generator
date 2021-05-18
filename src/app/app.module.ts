import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetBackgroundColorDirective } from './get-background-color.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, GetBackgroundColorDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
