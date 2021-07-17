import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { iCounterState } from '../../../interfaces/reduxToolKit'

const initialState: iCounterState = {
  value: 0,
  status: 'idle'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state ) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    incrementSaga: (state, action: PayloadAction<number>) => {
      state.status ='loading'
    },
    incrementSagaSuccess: (state, action: PayloadAction<number>) => {
      state.status ='idle'
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, incrementSaga, incrementSagaSuccess } = counterSlice.actions

export default counterSlice.reducer