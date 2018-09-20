import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order-data/:id', component: OrderDataComponent},
  {path: 'order-data', redirectTo: 'order-data/1'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


