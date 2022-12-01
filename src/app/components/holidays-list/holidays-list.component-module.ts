import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HolidaysListComponent } from './holidays-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, NgIf, ReactiveFormsModule, AsyncPipe, NgForOf],
  declarations: [HolidaysListComponent],
  providers: [],
  exports: [HolidaysListComponent]
})
export class HolidaysListComponentModule {
}
