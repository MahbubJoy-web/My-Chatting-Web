import React from 'react'
import { IoMdLogOut } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from '../../Slice/UserSlice';
import Footer from '../Footer/Footer';

const Userprofile = () => {
    const currentUser = useSelector((state)=> state. Data.value);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlogOut =()=>{
        navigate('/login')
        localStorage.removeItem('CurrentUser')
        dispatch(CurrentUser(null))
        
        
        
    }

  return (
    <>
    <div className="min-h-full">
      <div className="flex items-center justify-center h-[100vh]">
      <div className="relative px-2 py-3 bg-[#A1E3F9] rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        {/* Profile Image */}
        <div className="w-[200px] h-[200px] overflow-hidden rounded-full mx-auto mt-5">
          <img
            src={currentUser?.photoURL}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="p-6 text-center">
          <h2 className="text-2xl  text-[#143D60] font-bold text-white">{currentUser?.displayName}</h2>
          <p className='text-lg text-gray-600 font-poppins'>{currentUser?.email}</p>
          <p className="text-lg font-medium text-gray-700 ">Web Developer</p>
          <IoMdLogOut onClick={handlogOut} className=' w-[40px] h-[30px] text-[#143D60] dark:text-white mx-auto mt-6'/>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Userprofile
