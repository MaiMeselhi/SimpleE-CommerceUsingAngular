import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CountProductsService } from '../count-products.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../cart-service.service';
import { Store } from '@ngrx/store';
import { addToWishList } from '../store/star/wishList.ction';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList:any ;
  wishListProducts: any = [];
  selectedProduct: any = [];

  @ViewChild(ProductCardComponent) childComponent: any;
   productsCounter :any;
  dataFromChild: any;

  constructor(
    private router: Router,
    private productsService:ProductsService,
    private CountProductsService: CountProductsService,
    private cartService: CartService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.productsService.getProductsList().subscribe(
      data => {
        this.productsList= data
        },
        error => {
        console.log('error: ', error);
        },
        () => {
        console.log('complete ', "compelete");
        })


  //Use the service to get currentValue.subscribe to get the latest value
    this.CountProductsService.currentProductsCount.subscribe(
      (value: any) => (this.productsCounter= value)
    );

  }



//  1- Create new variable in constructor for the service
//  2- Use the updateFunction from the service and send the new value

  receiveProduct(product:any) {
    this.CountProductsService.updateProductsCounter(this.productsCounter+1)
    this.cartService.addtoCart(product);

  }

  addToWishList(product: any, index: number) {
    if (this. wishListProducts.filter((e: any) => e.id === product.id).length) {
      this.selectedProduct = this.selectedProduct.filter((e: any) => e !== index);
      let newWishList = this. wishListProducts.filter(
        (e: any) => e.id !== product.id
      );
      this.selectedProduct= newWishList;
      this.store.dispatch(
        addToWishList({
          products: newWishList.map((e: any) => e),
          count: newWishList.length,
        })
      );
    } else {
      this.selectedProduct .push(index);
      this. wishListProducts.push(product);
      this.store.dispatch(
        addToWishList({
        products: this. wishListProducts.map((e: any) => e),
          count: this. wishListProducts.length,
        })
      );
    }

  }

}



