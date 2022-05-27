import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './modules/create-account/create-account.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DeviceConfigComponent } from './modules/device-config/device-config.component';
import { DevicesComponent } from './modules/devices/devices.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { UserRegisterComponent } from './modules/user-register/user-register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: '',   redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children:[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'device-config', component: DeviceConfigComponent }],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
