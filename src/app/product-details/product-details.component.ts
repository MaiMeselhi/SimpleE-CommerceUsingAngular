import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  constructor(
    private activeRoute: ActivatedRoute, private productData: ProductsService ) {}


  ngOnInit(): void {
    this.activeRoute.params.subscribe(param =>
      this.productData.getProductsDetails(param.id).subscribe(
        (response) => {
          this. productDetails = response;
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }
}
