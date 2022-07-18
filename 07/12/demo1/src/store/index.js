import { configureStore } from '@reduxjs/toolkit'

import bookListReducer from '../actions/books'

const initialState = {
  value: 0,
}

export const store = configureStore({
  initialState,
  reducer: {
    bookList: bookListReducer,
  },
})