import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigavtionBarComponent } from './navigavtion-bar/navigavtion-bar.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigavtionBarComponent,
    LoginComponent,
    FeedbackComponent,
    HomepageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
