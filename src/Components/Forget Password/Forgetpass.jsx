import React, { useState, CSSProperties } from 'react'
import formbg from '../../assets/Image/frombg.png';
import { Link } from 'react-router-dom';
import leaf from '../../assets/Image/leaf.png';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';

const Forgetpass = () => {

const [Email , setEmail] = useState('')
const [Error, setError] = useState('');

// ============Spinner loader===========//

const [ loader, setloader] = useState(true)
// +==============Firebase Auth============//
    const auth = getAuth();

    const HandleOTP = () =>{
        if(!Email){
            setError('Enter your Email')
        }
        else{
            setloader(false)
            sendPasswordResetEmail(auth, Email)
            .then(() => {
                setloader(true)
                toast.success('Login Successful', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }
    }

  return (
    <>
      <div className="w-full h-screen bg-[#4CAB72] flex justify-center items-center">
        <div className="main_row py-[117px] px-[151px]">
          <div
            style={{
              backgroundImage: `url(${formbg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '1512px',
              height: '982px',
            }}
            className="Main_bg py-[66px] pl-[62px] w-[1512px] bg-[#fffcfc] rounded-[70px] relative"
          >
            <div className="form w-[700px] rounded-[50px] pt-[54px] pb-[144px] bg-[#ddd6d64a] border-[3px] border-white backdrop-filter backdrop-blur-[8px] mt-[170px]">
              <h2 className="text-[52px] font-poppins font-bold text-center text-white">Forget Password</h2>
              <p className="text-[16px] font-poppins font-medium text-white text-center">
                back to 
                <Link to={"/login"} className=" ml-2 text-[16px] font-poppins font-medium text-BandColor">
                    Login
                </Link>
              </p>
              <div className="Main-Input mt-[64px] pl-[66px] pr-[115px] flex flex-col gap-[30px] ">
                <p className="text-md font-poppins font-medium text-center text-red-500 mt-2">
                  {Error}
                </p>
                <div className="email">
                  <label htmlFor="email" className="block text-[18px] font-poppins font-bold text-white">
                    Email
                  </label>
                  <input
                     placeholder='Enter your User Email'
                    id="email"
                    onChange={(e) => {
                      setEmail((prev) => ( e.target.value ));
                      setError('');
                    }}
                    type="email"
                    onKeyDown={''}
                    className="w-full text-[16px] font-poppins text-white border-b-[3px] outline-none bg-transparent"
                  />
                </div>
                <div className=" button w-full text-center mt-[16px]">
                    {
                        loader?
                  <button
                    onClick={HandleOTP}
                    className="main_button w-[400px] py-[12px] px-[112px] bg-BandColor rounded-[10px] text-[16px] font-poppins font-bold text-[#696969] shadow-[0px_9px_20px_#62FFB4] transition-all duration-[0.3s] active:scale-[0.9]"
                  >
                    Send OTP
                  </button>
                        :
                  <button
                    className="main_button w-[400px] py-[12px] px-[112px] bg-BandColor rounded-[10px] text-[16px] font-poppins font-bold text-[#696969] shadow-[0px_9px_20px_#62FFB4] transition-all duration-[0.3s] active:scale-[0.9]"
                  >
                    <BeatLoader/>
                  </button>
                    }
                </div>
              </div>
            </div>
            <div className="leaf absolute bottom-[1px] right-[90px]">
              <img src={leaf} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forgetpass
