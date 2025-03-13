import React from 'react'

const ButtonV1 = ({ButtonBG ,ButtonText , ButtonV1Click}) => {
  return (
    <>
     <div onClick={ButtonV1Click} className={`py-[4px] px-[10px] sm:py-2 sm:px-5 bg[#000] text-[12px] sm:text-sm font-poppins font-semibold rounded-[10px] sm:shadow-[0px_20px_20px_10px_#cbd5e0] ${ButtonBG}`}>{ButtonText}</div> 
    </>
  )
}

export default ButtonV1
