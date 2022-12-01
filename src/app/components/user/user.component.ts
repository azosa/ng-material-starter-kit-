import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

  readonly param$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap(data=>this._userService.getOne(data['id']))
  );

  constructor(private _userService: UserService, private _activatedRoute: ActivatedRoute) {
  }
getName(name:any){
    return `${name.firstname} ${name.lastname}`

  }
}
