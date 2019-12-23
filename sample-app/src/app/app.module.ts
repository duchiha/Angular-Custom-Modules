import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { StarComponent } from './components/star/star.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailGuard } from './services/guards/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpClientModule,
     RouterModule.forRoot([
       {path:'products',component:ProductListComponent},
       {path:'products/:id',canActivate:[ProductDetailGuard], component: ProductDetailComponent},
       {path:'welcome',component: WelcomeComponent},
       {path:'',redirectTo:'welcome',pathMatch:'full'},
       {path:'**', redirectTo:'welcome',pathMatch:'full'}
     ])
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
