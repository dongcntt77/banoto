import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]; 
@NgModule({
  declarations: [CartComponent,LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerModule { }
