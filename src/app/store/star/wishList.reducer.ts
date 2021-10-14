import { Action, createReducer, on, State } from '@ngrx/store';
import { addToWishList } from './wishList.ction';

const initialValues: any = { products: [], count: 0 };

const WishListReducer = createReducer(
  initialValues,
  on(addToWishList , (state, { products, count }) => ({ ...state, products, count }))
);

export function reducer(state: any, action: Action) {
  return WishListReducer(state, action);
}
