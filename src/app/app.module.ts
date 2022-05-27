import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './modules/login/login.component';
import { CreateAccountComponent } from './modules/create-account/create-account.component';
import { HomeComponent } from './modules/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DevicesComponent } from './modules/devices/devices.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserRegisterComponent } from './modules/user-register/user-register.component';
import { DeviceConfigComponent } from './modules/device-config/device-config.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    DashboardComponent,
    DevicesComponent,
    HeaderComponent,
    UserRegisterComponent,
    DeviceConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
