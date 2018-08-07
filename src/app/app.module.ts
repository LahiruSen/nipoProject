import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Form1Component } from './components/form1/form1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'application', component: Form1Component },
  { path: 'document',      component: DocumentComponent },
  { path: '',      component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    NavbarComponent,
    DocumentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
