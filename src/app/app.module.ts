import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { FormsComponent } from './forms/forms.component';
import { MyproductComponent } from './myproduct/myproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    TaskComponent,
    ItemlistComponent,
    FormsComponent,
    MyproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
