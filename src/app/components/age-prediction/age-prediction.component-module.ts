import { NgModule } from '@angular/core';
import { CommonModule,AsyncPipe  } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AgePredictionComponent } from './age-prediction.component';
import {AgePredictionService} from "../../services/age-prediction.service";

@NgModule({
  imports: [
    AsyncPipe,
    CommonModule,
    MatCardModule
  ],
  declarations: [AgePredictionComponent],
  providers: [AgePredictionService],
  exports: [AgePredictionComponent]
})
export class AgePredictionComponentModule {
}
