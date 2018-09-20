import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {AboutComponent} from './components/about/about.component';
import {AppRoutingModule} from './app.routing';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {UserOrdersComponent} from './user/components/user-orders/user-orders.component';
import {UserComponent} from './user/user.component';
import {UserDetailsComponent} from './user/components/user-details/user-details.component';
import {UserEditInfoComponent} from './user/components/user-edit-info/user-edit-info.component';
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

