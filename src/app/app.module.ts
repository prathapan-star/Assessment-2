import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GadgetsListComponent } from './gadgets-list/gadgets-list.component';
import { CreateGadgetsComponent } from './create-gadgets/create-gadgets.component';
import { EditGadgetsComponent } from './edit-gadgets/edit-gadgets.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GadgetsListComponent,
    CreateGadgetsComponent,
    EditGadgetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
