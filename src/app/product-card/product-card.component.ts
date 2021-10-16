import { Component, OnInit , Input,Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productItem : any;
  @Output() sendProduct= new EventEmitter<any>();
  @Output() sendToWishList=new EventEmitter<any>();
  @Output() sendDetails= new EventEmitter<any>();
  constructor(    ) { }

  ngOnInit(): void {
  }

  sendDataToParent(){
    console.log(this.productItem)
    this.sendProduct.emit(this.productItem);
  }
  clickStarProduct (){
    this.sendToWishList.emit(this.productItem.title)
    console.log(this.productItem.image)
  }

  sendDetailsProduct () {
    this.sendDetails.emit(this.productItem)
  }

}
