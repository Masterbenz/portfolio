import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import navSlice from './navSlice'

export const store = configureStore({
  reducer: {
    masterbenz: userSlice,
    navSlice: navSlice,
  },
})

export default store
