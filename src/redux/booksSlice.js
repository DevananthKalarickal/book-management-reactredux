// src/redux/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';



const booksSlice = createSlice({
  name: 'books',
  initialState:[],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      return state.filter(book => book.id !== action.payload);
    },
    editBook: (state, action) => {
      const index = state.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addBook, removeBook, editBook } = booksSlice.actions;
export default booksSlice.reducer;
