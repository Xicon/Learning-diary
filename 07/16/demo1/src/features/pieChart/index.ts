import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  value: [
    {
      id: string | number,
      type: string,
      value: number,
    }]
}

const initialState: IInitialState = {
  value: [
    {
      id: -1,
      type: '示例分类',
      value: 0,
    },
  ],
}

const pieChart = createSlice({
  name: 'pieChart',
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      state.value = action.payload
    },
  },
})

export const { updateState } = pieChart.actions
export default pieChart.reducer