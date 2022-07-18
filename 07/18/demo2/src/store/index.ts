import { configureStore } from '@reduxjs/toolkit'

import countReducer from '../features/count'

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch