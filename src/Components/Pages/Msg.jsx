import React from 'react'
import MsgList from '../MsgList/MsgList'
import MsgBox from '../MsgBox/MsgBox'
import MsgMobile from './MsgMobile'

const Msg = () => {
  return (
    <>
     <div className="flex flex-wrap">
        <MsgList/>
        <MsgBox/>
        <MsgMobile/>
     </div>
    </>
  )
}

export default Msg
