import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductListComponent } from './product-list.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatCheckboxModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
