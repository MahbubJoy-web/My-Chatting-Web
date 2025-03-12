import React, { useState , CSSProperties  } from 'react';
import formbg from '../../assets/Image/frombg.png';
import goog from '../../assets/Image/google 1.png';
import apple from '../../assets/Image/apple-seeklogo.com 1.png';
import leaf from '../../assets/Image/leaf.png';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider, updateProfile  } from 'firebase/auth';
import { Bounce, toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import { BeatLoader } from 'react-spinners';
import './RegisterRes.css'

const Register = () => {
  const [Data, setData] = useState({ Name: '', Email: '', Password: '' });
  const [Error, setError] = useState('');
  // ----------------navigation----------------
  const nagigate = useNavigate()
  // ==============Loading State==========
  const [loading, Setloading] = useState(true)

  // Firebase Authentication Initialization
  const auth = getAuth();
  // =============Google login======
  const provider = new GoogleAuthProvider();

  const handleSubmit = () => {
    const { Name, Email, Password } = Data;

    // Handle specific error messages
    if (!Name && Email && Password) {
      setError('Please Enter your Name');
      Setloading(true)
      return;
    }
    if (!Email && Name && Password) {
      setError('Please Enter your Email');
      Setloading(true)
      return;
    }
    if (!Password && Name && Email) {
      setError('Please Enter your Password');
      Setloading(true)
      return;
    }
    if (!Name && !Email && !Password) {
      setError('Please fill up all the inputs');
      Setloading(true)
      return;
    }
    if (!Name && !Email) {
      setError('Please fill up the Name & Email');
      Setloading(true)
      return;
    }
    if (!Name && !Password) {
      setError('Please fill up the Name & Password');
      Setloading(true)
      return;
    }
    if (!Email && !Password) {
      setError('Please fill up the Email & Password');
      Setloading(true)
      return;
    }
    else{
      Setloading(false)
      // Proceed with Firebase Authentication
      createUserWithEmailAndPassword(auth, Email, Password)
      updateProfile(auth.currentUser, {
        displayName: Data.Name,
        photoURL: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
      }).then((userCredential) => {
          sendEmailVerification(auth.currentUser).
          then(() => {
            Setloading(true)
            toast.success('Email verification sent !', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
              transition: Bounce,
            });
            nagigate('/login')
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
            setError('Email is already in use.');
            Setloading(true)
          } else if (errorCode === 'auth/weak-password') {
            setError('Password is too weak. Please choose a stronger password.');
            Setloading(true)
          } else {
            setError('An error occurred. Please try again.');
            Setloading(true)
          }
        });
    }

  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }
  
  // ===============Google button====================
   const handleGoogle =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
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
  });
   }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#4CAB72]">
        <div className="container">
        <div className="main_row w-full max-w-[1512px] ">
          <div
            style={{
              backgroundImage: `url(${formbg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="Main_bg py-[66px] p-[6px] max-h-[982px] w-full  bg-[#fffcfc] rounded-[70px] relative">
            <div className="form max-w-[600px] rounded-[50px] pt-[54px] pb-[144px] bg-[#ddd6d64a] border-[3px] border-white backdrop-filter backdrop-blur-[8px] ">
              <h2 className="head_text text-[40px] font-poppins font-bold text-center text-white">Get Started</h2>
              <p className=" log text-[16px] font-poppins font-medium text-white text-center">
                Already have an Account?{' '}
                <Link to={'/login'} className=" font-poppins font-medium text-BandColor">
                  Log in
                </Link>
              </p>
              <div className="Main_Input mt-[64px] pl-[30px] pr-[50px] md:pl-[115px] flex flex-col gap-[30px] ">
                <p className="text-md font-poppins font-medium text-center text-red-300 mt-2">
                  {Error}
                </p>
                <div className="name">
                  <label htmlFor="name" className="block text-[18px] font-poppins font-bold text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    onChange={(e) => {
                      setData((prev) => ({ ...prev, Name: e.target.value }));
                      setError('');
                    }}
                    type="text"
                    onKeyDown={handleEnter}
                    className="w-full text-[16px] font-poppins text-white border-b-[3px] outline-none bg-transparent"
                  />
                </div>
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
                <div className=" Button w-full text-center mt-[16px]">
                  {
                    loading?
                  <button
                    onClick={handleSubmit}
                    className="main_button max-w-[290px] py-[12px] px-[30px] sm:px-[112px] bg-BandColor rounded-[10px] text-[16px] font-poppins font-bold text-[#696969] shadow-[0px_9px_20px_#62FFB4] transition-all duration-[0.3s] active:scale-[0.9]"
                  >
                    Sign Up
                  </button>
                    :
                  <button
                    className="main_button w-[290px] py-[12px] px-[112px] bg-BandColor rounded-[10px] text-[16px] font-poppins font-bold text-[#696969] shadow-[0px_9px_20px_#62FFB4] transition-all duration-[0.3s] active:scale-[0.9]"
                  >
                    <BeatLoader />
                  </button>
                  }
                </div>
                <div className="w-full flex justify-center items-center gap-3">
                  <div className="max-w-[184px] h-[3px] bg-[#F4F4F4]"> </div>
                  <h2 className="text-[16px] font-poppins font-medium text-white text-center">Or Sign Up with</h2>
                  <div className="max-w-[180px] h-[3px] bg-[#F4F4F4]"> </div>
                </div>
                <div className="signup w-full flex justify-center gap-3">
                  <Link
                    to={'#'}
                    className="inline-block w-[50px] h-[50px] bg-white rounded-[10px] flex justify-center items-center shadow-[0px_9px_20px_#62FFB4]"
                  >
                    <img src={apple} alt="" />
                  </Link>
                  <button
                    onClick={handleGoogle}
                    className="inline-block w-[50px] h-[50px] bg-white rounded-[10px] flex justify-center items-center shadow-[0px_9px_20px_#62FFB4]"
                  >
                    <img src={goog} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="leaf w-[800px] absolute bottom-[0px] right-[130px] hidden">
              <img src={leaf} alt="" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Register;
