import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  constructor(private store: Store) {}
  wishList: any = 'WishList';
  listProducts: any = [];
  count: number = 0;
  ngOnInit(): void {
    this.store.select(this.wishList).subscribe((data: any) => {
      this.count = data.count;
      this.listProducts = data.products;
    });
  }
}
