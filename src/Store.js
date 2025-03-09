import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Slice/UserSlice'
import  MsgFrnd  from './Slice/MsgFrnd'

export default configureStore({
  reducer: {
    Data : UserSlice,
    ChatData : MsgFrnd
  },
})