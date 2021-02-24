import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent1 } from './home1/home1.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './Lab4Component/lab4.component';
import { ToDo } from './ToDoListComponent/todo.component';
import { CatagoryComponent } from './Catagory/catagory.component';
import { TopBanner } from './TopBanner/topbanner.component';
import { SearchBar } from './SearchBar/searchbar.component';
import { NavBar } from './NavBar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SwitfviewComponent } from './switfview/switfview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent1,
    CountingComponent,
    Lab4Component,
    ToDo,
    CatagoryComponent,
    TopBanner,
    SearchBar,
    NavBar,
    SwitfviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
