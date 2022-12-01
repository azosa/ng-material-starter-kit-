import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { GenderPredictionService } from '../../services/gender-prediction.service';
import {GenderPredictionModel} from "../../models/gender-prediction.model";

@Component({
  selector: 'app-gender-prediction',
  templateUrl: './gender-prediction.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenderPredictionComponent {
  readonly param$: Observable<GenderPredictionModel> = this._activatedRoute.params.pipe(
    switchMap(data=>this._genderPredictionService.getOne(data['name'])));

  constructor(private _activatedRoute: ActivatedRoute, private _genderPredictionService: GenderPredictionService) {
  }
}
