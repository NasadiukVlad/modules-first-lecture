import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {AboutComponent} from './components/about/about.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    OrderDataComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

