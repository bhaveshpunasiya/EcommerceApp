import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (!existingItem) {
        state.items.push(item);
      }
    },
    removeItemFromWishlist: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
