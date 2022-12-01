export interface GenderPredictionModel {
  readonly count: number;
  readonly gender: string;
  readonly name: string;
  readonly probability: number;
}
