import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  readonly param$: Observable<CartModel> = this._activatedRoute.params.pipe(
    switchMap(data=>this._cartService.getOne(data['id'])))


  constructor(private _activatedRoute: ActivatedRoute, private _cartService: CartService) {
  }
 //  checkQuantity(cart:any){
 //    let quantity =0;
 //    for(let i=0;i<cart.length;i++){
 // quantity+=cart[i].quantity;
 //    }
 //    return quantity;
 //  }
}
