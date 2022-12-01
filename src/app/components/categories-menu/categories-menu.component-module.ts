import { NgModule } from '@angular/core';
import { CategoriesMenuComponent } from './categories-menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [
    MatMenuModule,
    NgForOf,
    AsyncPipe
  ],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
