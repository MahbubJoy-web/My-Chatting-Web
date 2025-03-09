import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('CurrentUser')) ? JSON.parse(localStorage.getItem('CurrentUser')) : null,
  },
  reducers: {

    CurrentUser: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {CurrentUser} = counterSlice.actions

export default counterSlice.reducer