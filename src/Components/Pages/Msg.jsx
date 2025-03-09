import React from 'react'
import MsgList from '../MsgList/MsgList'
import MsgBox from '../MsgBox/MsgBox'

const Msg = () => {
  return (
    <>
     <div className=" flex">
        <MsgList/>
        <MsgBox/>
     </div>
    </>
  )
}

export default Msg
