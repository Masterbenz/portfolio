import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
}

export const navSlice = createSlice({
  name: 'navStore',
  initialState: initialState,
  reducers: {
    appSideBar: (state, action) => {
      state.sidebarShow = action.payload
      // console.log(action)
      // state.user = action.payload
      // state.loading = true
    },
  },
})

export const { appSideBar } = navSlice.actions

export default navSlice.reducer
