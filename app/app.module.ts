import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import {
  MdToolbarModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdCheckboxModule,
  MdRadioModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { ExamplesComponent } from "./examples/examples.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTabsModule,
    MdButtonModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdRadioModule,
    RouterModule.forRoot([
      { path: "examples", component: ExamplesComponent },
      { path: "", component: HomeComponent },
      // otherwise redirect to home
      { path: "**", redirectTo: "" }
    ])
  ],
  declarations: [AppComponent, ExamplesComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
