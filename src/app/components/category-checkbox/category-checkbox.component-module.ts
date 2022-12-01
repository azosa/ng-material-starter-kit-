import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CategoryCheckboxComponent } from './category-checkbox.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, NgForOf, AsyncPipe],
  declarations: [CategoryCheckboxComponent],
  providers: [],
  exports: [CategoryCheckboxComponent]
})
export class CategoryCheckboxComponentModule {
}
