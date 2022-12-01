import { NgModule } from '@angular/core';
import { ProductsService } from './products.service';
import {CategoriesService} from "./categories.service";

@NgModule({
  imports: [],
  declarations: [],
  providers: [ProductsService,CategoriesService],
  exports: []
})
export class ProductsServiceModule {
}
