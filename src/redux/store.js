import { configureStore } from '@reduxjs/toolkit'
import couner from './couner'

export const store = configureStore({
  reducer: {
    counter: couner
  },
})