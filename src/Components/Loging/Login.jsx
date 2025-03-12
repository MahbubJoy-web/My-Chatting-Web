import React, { useState, CSSProperties  } from 'react';
import formbg from '../../assets/Image/frombg.png';
import goog from '../../assets/Image/google 1.png';
import apple from '../../assets/Image/apple-seeklogo.com 1.png';
import leaf from '../../assets/Image/leaf.png';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
import { Bounce, toast } from 'react-toastify';
import Register from '../Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentUser } from '../../Slice/UserSlice';
import { BeatLoader } from 'react-spinners';
import { getDatabase, push, ref, set } from "firebase/database";
import './loginRes.css'


const Login = () => {
  const [Data, setData] = useState({Email: '', Password: '' });
  const [Error, setError] = useState('');
// ==================Redux==================//
  const Dispatch = useDispatch();

  // =============Realtime Database================//
  const db = getDatabase()

  // ==============navigate================//
  const navigate = useNavigate();
  // Firebase Authentication Initialization
  const auth = getAuth();

  // ==============Google Auth===============//
  const provider = new GoogleAuthProvider();

  // ===============Spinner Loader==========//
  const [loader , setloader] = useState( true)

// ==================Handle enter==================//
 const handleEnter = (e) => { 
    if (e.key === 'Enter') {
      handleSubmit();
 }} ;

// ====================Main Button=============//
  const handleSubmit = () => {
    const {Email, Password } = Data;
    if (!Email  && Password) {
      setError('Please Enter your Email');
      return;
      setloader(true)
    }
    if (!Password && Email) {
      setError('Please Enter your Password');
      return;
      setloader(true)
    }
    if (!Email && !Password) {
      setError('Please fill up all the inputs');
      return;
      setloader(true)
    }
    else{
      setloader(false)
      signInWithEmailAndPassword(auth, Data.Email, Data.Password)
      .then((userCredential) => {
        setloader(true)
        const user = userCredential.user;
          if(user.emailVerified==true){
            toast.success('Login Successful', {
              position: 'top-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            navigate('/');
            Dispatch(CurrentUser(user))
            localStorage.setItem('CurrentUser', JSON.stringify(user))
            // ========Set Data in Realtime Database=========//
            set(ref(db, 'AllUsers/' + user.uid), {
              UserName : user.displayName,
              UserPhoto : user.photoURL,
              userEmail : user.email,
             
            });

            
      } else {
          toast.error('Email not verified!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });
      };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode) {
          setError('Invalid Email or Password');
          setloader(true)
        }
        
      });
    };
    }


  // ===================Google Button===============//
  const handleGoogle =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log('dsfadfg');
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
  }
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#4CAB72]">
        <div className="main_row w-full max-w-[1512px]">
          <div
            style={{
              backgroundImage: `url(${formbg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="Main_bg py-[66px] p-[6px] w-full bg-[#fffcfc] rounded-[70px] relative"
          >
            <div className="form max-w-[600px] max-h-[850px]] rounded-[50px] pt-[54px] pb-[144px] bg-[#ddd6d64a] border-[3px] border-white backdrop-filter backdrop-blur-[8px] ">
              <h2 className="text-[52px] font-poppins font-bold text-center text-white">Login</h2>
              <p className="text-[16px] font-poppins font-medium text-white text-center">
                I Have no Account?{' '}
                <Link to={"/register"} className="text-[16px] font-poppins font-medium text-BandColor">
                    Register Now
                </Link>
              </p>
              <div className="Main-Input mt-[64px] pl-[30px] pr-[30px] flex flex-col gap-[30px] ">
                <p className="text-md font-poppins font-medium text-center text-red-300 mt-2">
                  {Error}
                </p>
                <div className="email">
                  <label htmlFor="email" className="block text-[18px] font-poppins font-bold text-white">
                    Email
                  </label>
                  <input
                     
                    id="email"
                    onChange={(e) => {
                      setData((prev) => ({ ...prev, Email: e.target.value }));
                      setError('');
                    }}
                    type="email"
                    onKeyDown={handleEnter}
                    className="w-full text-[16px] font-poppins text-white border-b-[3px] outline-none bg-transparent"
                  />
                </div>
                <div className="password">
                  <label htmlFor="pss" className="block text-[18px] font-poppins font-bold text-white">
                    Password
                  </label>
                  <input
                    id="pss"
                    onChange={(e) => {
                      setData((prev) => ({ ...prev, Password: e.target.value }));
                      setError('');
                    }}
                    type="password"
                    onKeyDown={handleEnter}
                    className="w-full text-[16px] font-poppins text-white border-b-[3px] outline-none bg-transparent"
                  />
                </div>
                <div className="Forgetpass">
                  <Link
                   to={'/Forgetpass'}
                  className="block text-[14px] font-poppins font-medium text-BandColor"
                  >
                    Forget Password
                  </Link>
                </div>
                <div className=" button w-full text-center mt-[16px]">
                  {
                    loader?
                  <button
                    onClick={handleSubmit}
                    className="main_button max-w-[290px] py-[12px] px-[30px] sm:px-[112px] bg-BandColor rounded-[10px] text-[16px] font-poppins font-bold text-[#696969] shadow-[0px_9px_20px_#62FFB4] transition-all duration-[0.3s] active:scale-[0.9]"
                  >
                    Sign In
                  </button>
                    :
                  <button
                    className="main_button w-[290px] py-[12px] px-[112px] bg-BandColor rounded-[10px] text-[16px] font-poppins font-bold text-[#696969] shadow-[0px_9px_20px_#62FFB4] transition-all duration-[0.3s] active:scale-[0.9]"
                  >
                    <BeatLoader />
                  </button>
                  }
                </div>
                <div className="w-full flex items-center gap-3">
                  <div className="w-[184px] h-[3px] bg-[#F4F4F4]"> </div>
                  <h2 className="text-[16px] font-poppins font-medium text-white">Or Sign Up with</h2>
                  <div className="w-[180px] h-[3px] bg-[#F4F4F4]"> </div>
                </div>
                <div className="signup w-full flex justify-center gap-3">
                  <button
                    onClick={handleGoogle}
                    className="inline-block w-[50px] h-[50px] bg-white rounded-[10px] flex justify-center items-center shadow-[0px_9px_20px_#62FFB4]"
                  >
                    <img src={goog} alt="" />
                  </button>
                  <Link
                    to={'#'}
                    className="inline-block w-[50px] h-[50px] bg-white rounded-[10px] flex justify-center items-center shadow-[0px_9px_20px_#62FFB4]"
                  >
                    <img src={apple} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="leaf w-[800px] absolute bottom-[0px] right-[130px] hidden">
              <img src={leaf} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

