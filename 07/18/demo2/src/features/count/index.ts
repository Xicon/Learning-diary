import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStore } from '../../store'

interface IInit {
  value: {
    count: number
  }
}

const initialState: IInit = {
  value: {
    count: 0,
  },
}

const count = createSlice({
  name: 'count',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.value.count += action.payload
    },
    sub: (state, action: PayloadAction<number>) => {
      state.value.count -= action.payload
    },
  },
})

export const {
  add,
  sub,
} = count.actions
const selectCount = (state: RootStore) => state.count.value
export default count.reducer