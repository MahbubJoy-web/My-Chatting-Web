import React from 'react'

const CommonUserProfile = ({CommonUserPhoto, CommonUserName, CommonUserEmail, Photosize, Namesize, Emailsize}) => {
  return (
    <>
      <div className="">
      <div className="User-section mt-5 flex items-center gap-5">
            <div className={`user-Photo w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] flex justify-center items-center rounded-full overflow-hidden bg-gray-700 ${Photosize}`}>
                <img src={CommonUserPhoto} alt="" />
            </div>
            <div className="">
            <h3 className={`text-[14px] sm:text-lg font-bold text-gray-800 ${Namesize}`}>{CommonUserName}</h3>
            <h2 className={`text-[10px] sm:text-[12px] font-poppins font-regular ${Emailsize}`}>{CommonUserEmail}</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default CommonUserProfile
