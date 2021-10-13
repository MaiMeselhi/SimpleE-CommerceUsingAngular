import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountProductsService {
  //Create new Behaviour Subject
  private productsCounter = new BehaviorSubject(0)

  //Create New variable as Observable [public variable to be used in other component]
  currentProductsCount = this.productsCounter.asObservable();
  constructor() { }

 // Create Function to update behaviour subject [.next()]
 updateProductsCounter(newCounterValue: any){
  console.log(newCounterValue)
  this.productsCounter.next(newCounterValue);
}
}
