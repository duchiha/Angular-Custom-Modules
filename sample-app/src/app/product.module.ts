import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './services/guards/product-detail.guard';
import { StarComponent } from './components/star/star.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
    ])
  ]
})
export class ProductModule { }
