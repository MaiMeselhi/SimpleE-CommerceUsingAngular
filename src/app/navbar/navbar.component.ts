import { Component, OnInit } from '@angular/core';
import { CountProductsService } from '../count-products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  productsCounter :any;
  constructor(private CountProductsService: CountProductsService){}

  ngOnInit(): void {
    this.productsCounter  = this.CountProductsService.currentProductsCount;
  }
}
