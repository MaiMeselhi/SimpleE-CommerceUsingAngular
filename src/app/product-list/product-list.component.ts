import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CountProductsService } from '../count-products.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../cart-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList:any ;


  @ViewChild(ProductCardComponent) childComponent: any;
   productsCounter :any;
  dataFromChild: any;

  constructor(
    private router: Router,
    private productsService:ProductsService,
    private CountProductsService: CountProductsService,
    private cartService: CartService
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



}



