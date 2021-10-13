import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  constructor(private productsService:ProductsService ) { }

  ngOnInit(): void {


this.productsService.getProductsList().subscribe(
  data => {
    this.products= data
    },
    error => {
    console.log('error: ', error);
    },
    () => {
    console.log('complete ', "compelete");
    }

)




  }

}
function get() {
  throw new Error('Function not implemented.');
}

