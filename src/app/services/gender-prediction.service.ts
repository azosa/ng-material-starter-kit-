import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenderPredictionModel } from '../models/gender-prediction.model';

@Injectable()
export class GenderPredictionService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(name: string): Observable<GenderPredictionModel> {
    return this._httpClient.get<GenderPredictionModel>(`https://api.genderize.io/?name=${name}`);
  }
}
