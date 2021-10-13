
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',

})
export class CartComponent implements OnInit {

  public productsList : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.productsList = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}