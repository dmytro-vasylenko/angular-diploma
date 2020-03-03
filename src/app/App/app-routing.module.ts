import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../Modules/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
];

const routerOptions = {
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
