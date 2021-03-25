import { CourseComponent } from './course.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { SwitchDirectiveExampleComponent } from './switch-directive-example/switch-directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    XyzComponent,
    SwitchDirectiveExampleComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
