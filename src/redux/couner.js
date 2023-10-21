import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementFive: (state) => {
        state.value += 5
    },
    minusFive: (state, action) => {
        state.value -= action.payload
      },
      multiplyFive: (state, action) => {
        state.value *= action.payload
      }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementFive, minusFive, multiplyFive } = counterSlice.actions

export default counterSlice.reducer