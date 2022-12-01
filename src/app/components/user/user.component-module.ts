import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './user.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {UserService} from "../../services/user.service";

@NgModule({
  imports: [MatCardModule, NgIf, AsyncPipe, NgForOf],
  declarations: [UserComponent],
  providers: [UserService],
  exports: [UserComponent]
})
export class UserComponentModule {
}
