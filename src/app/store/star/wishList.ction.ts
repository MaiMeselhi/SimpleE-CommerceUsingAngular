import {createAction, props } from '@ngrx/store';
export const addToWishList = createAction(
  'ADD_TO_WISHLIST',
  props<{products: []; count: 0 }>()
);
