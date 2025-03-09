import React from 'react'

const ButtonV1 = ({ButtonBG ,ButtonText , ButtonV1Click}) => {
  return (
    <>
     <div onClick={ButtonV1Click} className={`py-2 px-5 bg[#000] text-sm font-poppins font-semibold rounded-[10px] shadow-[0px_20px_20px_10px_#cbd5e0] ${ButtonBG}`}>{ButtonText}</div> 
    </>
  )
}

export default ButtonV1
