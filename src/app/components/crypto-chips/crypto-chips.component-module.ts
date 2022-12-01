import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CryptoChipsComponent } from './crypto-chips.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [MatCardModule, NgForOf, AsyncPipe, MatChipsModule],
  declarations: [CryptoChipsComponent],
  providers: [],
  exports: [CryptoChipsComponent]
})
export class CryptoChipsComponentModule {
}
