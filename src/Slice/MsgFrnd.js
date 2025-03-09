import { createSlice } from '@reduxjs/toolkit'

export const MsgFrnd = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('MsgUser')) ? JSON.parse(localStorage.getItem('MsgUser')) : null,
  },
  reducers: {

    MsgUser: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {MsgUser} = MsgFrnd.actions

export default MsgFrnd.reducer