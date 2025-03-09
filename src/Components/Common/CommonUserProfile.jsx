import React from 'react'

const CommonUserProfile = ({CommonUserPhoto, CommonUserName, CommonUserEmail}) => {
  return (
    <>
      <div className="">
      <div className="User-section mt-5 flex items-center gap-5">
            <div className="user Photo w-[70px] h-[70px] flex justify-center items-center rounded-full overflow-hidden bg-gray-700">
                <img src={CommonUserPhoto} alt="" />
            </div>
            <div className="">
            <h3 className='text-lg font-bold text-gray-800'>{CommonUserName}</h3>
            <h2 className='text-[12px] font-poppins font-regular'>{CommonUserEmail}</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default CommonUserProfile
