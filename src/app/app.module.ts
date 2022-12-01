import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {CategoryListComponentModule} from "./components/category-list/category-list.component-module";
import {CryptoChipsComponentModule} from "./components/crypto-chips/crypto-chips.component-module";
import { MatChipsModule } from '@angular/material/chips';
import {CryptoService} from "./services/crypto.service";
import {HolidaysService} from "./services/holidays.service";
import {ProductFormComponentModule} from "./components/product-form/product-form.component-module";
@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CategoryListComponentModule,
      CryptoChipsComponentModule,
      MatChipsModule,
      ProductFormComponentModule

    ],
  providers: [CryptoService,
  HolidaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
