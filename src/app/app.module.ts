import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {RulesComponent} from './rules/rules.component';
import {FaqComponent} from './faq/faq.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {MainService} from './main/main.service';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    FaqComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'rules', component: RulesComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ])
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
