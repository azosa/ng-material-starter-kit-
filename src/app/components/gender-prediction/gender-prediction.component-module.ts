import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GenderPredictionComponent } from './gender-prediction.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, NgIf, AsyncPipe],
  declarations: [GenderPredictionComponent],
  providers: [],
  exports: [GenderPredictionComponent]
})
export class GenderPredictionComponentModule {
}
