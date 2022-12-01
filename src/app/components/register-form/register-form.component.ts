import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    name : new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
    }),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      number: new FormControl(),
      zipcode: new FormControl(),
      geolocation: new FormGroup({
        lat: new FormControl(),
        long: new FormControl(),
      }),
    }),
    phone: new FormControl()
  });

  constructor(private _registerService: RegisterService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._registerService.create(registerForm.getRawValue()).subscribe();
  }
}
