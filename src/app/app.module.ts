import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComps/todos/todos.component';
import { NavbarComponent } from './MyComps/navbar/navbar.component';
import { TodoLayoutComponent } from './MyComps/todo-layout/todo-layout.component';
import { TodoSubmitFormComponent } from './MyComps/todo-submit-form/todo-submit-form.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './MyComps/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent,
    TodoLayoutComponent,
    TodoSubmitFormComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
