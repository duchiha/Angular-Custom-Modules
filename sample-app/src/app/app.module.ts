import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { StarComponent } from './components/star/star.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductModule } from './product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     RouterModule.forRoot([
       {path:'welcome',component: WelcomeComponent},
       {path:'',redirectTo:'welcome',pathMatch:'full'},
       {path:'**', redirectTo:'welcome',pathMatch:'full'}
     ]),
     ProductModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
