import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import * as Actions from "../../_actions";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {WarningAlert} from "../../components/common/ToastAlert";
import sellerimg from "../../assets/images/seller.png"
import logo_laptop from "../../assets/images/logo_laptop.png";
import logo_mobile from "../../assets/images/logo_mobile.png";


const SellerSignupPage = () => {

  
  const [seller, setSeller] = useState({
    fullName: "",
    lastName: "",
    companyName: "",
    companyWebsite:"",
    emailAddress: "",
    password:"",
    passwordConfirm:""
  });
  const [phoneNumber, setPhoneNumber] = useState("");
	const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSeller((user) => ({ ...user, [name]: value }));
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSellerRegister = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if(seller.password !== seller.passwordConfirm) WarningAlert("Match Password and Confirm Password!");
    else
    if(seller.fullName && seller.lastName && seller.companyName && seller.companyWebsite && seller.emailAddress && seller.password &&phoneNumber){
      const sellerregisterdata = {
        fullName: seller.fullName,
        lastName: seller.lastName,
        companyName: seller.companyName,
        companyWebsite: seller.companyWebsite,
        email: seller.emailAddress,
        password: seller.password,
        phoneNumber: phoneNumber,
      };
      dispatch(Actions.sellerregister(sellerregisterdata,navigate));
    }
  };
  return (
    <div>
      <div className="bg-[#1B0C4B] lg:bg-transparent">
        <div className="flex min-h-screen relative">
          <div className="flex items-center">
            <img src={sellerimg} alt="" className="absolute  right-0 z-0"/>
          </div>
          <div className="flex absolute md:mt-[43px] ml-[45%] md:ml-[130px] xl:ml-[159px] z-10">
            <a href='/' className="hidden lg:flex">
              <img src={logo_laptop} alt="logo" className="hidden lg:flex h-[44px] w-[150px] 2xl:h-[70px] 2xl:w-[258px] mr-[30px]"/>
            </a>
          </div>
          <div className="flex w-full md:w-1/2 justify-center items-center  lg:mt-[95px] mx-16 z-10">
            <div className="w-full h-full flex items-center justify-center ">
              <div className="">
                <a href='/'className="flex lg:hidden items-center justify-center mb-3 mt-[30px]">
                  <img src={logo_mobile} alt="logo" className="flex lg:hidden h-[52px] w-[67px]"/>
                </a>
                <h1 className="text-white lg:text-black  font-bold text-2xl mb-3 flex items-center justify-center">
                  Create An Account
                </h1>
                <div className="flex mb-3 items-center justify-center">
                  <p className="text-white lg:text-black">Already an user?</p>&nbsp;&nbsp;
                  <a href="/sellermobilelogin" className="text-red-600 hover:text-white lg:hover:text-black ">
                    Sign in
                  </a>
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <div className="block lg:grid lg:grid-cols-2 lg:gap-3">
                    <div className="w-full">
                      <h1 className="text-white lg:text-black text-sm">Full Name </h1>
                      <input
                        className="border border-black rounded-md py-1 px-1 mb-2 bg-white text-black"
                        style={{ width: "inherit" }}
                        type="text"
                        name="fullName"
                        placeholder="Full Name*"
                        value={seller.fullName}
                        onChange={handleChange}
                      />
                      {submitted && !seller.fullName &&<div className="text-sm text-amber-600" >Full Name is required</div>}
                    </div>
                    <div className="w-full">
                      <h1 className="text-white lg:text-black text-sm">Last Name </h1>
                      <input
                        className="border border-black rounded-md py-1 px-1 mb-2 bg-white text-black"
                        style={{ width: "inherit" }}
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        value={seller.lastName}
                        onChange={handleChange}
                      />
                      {submitted && !seller.lastName &&<div className="text-sm text-amber-600" >Last Name is required</div>}
                    </div>
                  </div>
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white lg:text-black text-sm">Company Name </h1>
                  <input
                    className="border border-black rounded-md py-1  nbpx-1 mb-2  w-full bg-white text-black"
                    type="text"
                    name="companyName"
                    placeholder="Company Name*"
                    value={seller.companyName}
                    onChange={handleChange}
                  />
                  {submitted && !seller.companyName &&<div className="text-sm text-amber-600" >Company Name is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white lg:text-black text-sm">Company Website </h1>
                  <input
                    className="border border-black rounded-md py-1 px-1 mb-2 w-full bg-white text-black"
                    type="text"
                    name="companyWebsite"
                    placeholder="Company Website*"
                    value={seller.companyWebsite}
                    onChange={handleChange}
                  />
                  {submitted && !seller.companyWebsite &&<div className="text-sm text-amber-600" >CompanyWebsite Name is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white lg:text-black text-sm">Email Address </h1>
                  <input
                    className="border border-black rounded-md py-1 px-1 mb-2 w-full bg-white text-black"
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address*"
                    value={seller.emailAddress}
                    onChange={handleChange}
                  />
                  {submitted && !seller.emailAddress &&<div className="text-sm text-amber-600" >Email Address is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white lg:text-black text-sm">Password </h1>
                  <input
                    className="border border-black  rounded-md py-1 px-1 mb-2 w-full bg-white text-black"
                    type="password"
                    name="password"
                    placeholder="Password*"
                    value={seller.password}
                    onChange={handleChange}
                  />
                  {submitted && !seller.password &&<div className="text-sm text-amber-600" >Email Address is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white lg:text-black text-sm">Password Confirm</h1>
                  <input
                    className="border  border-black rounded-md py-1 px-1 mb-2 w-full bg-white text-black"
                    type="password"
                    name="passwordConfirm"
                    placeholder="Password Confirm*"
                    value={seller.passwordConfirm}
                    onChange={handleChange}
                  />
                  {submitted && !seller.passwordConfirm &&<div className="text-sm text-amber-600" >Email Address is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white lg:text-black text-sm">Phone Number</h1>
                  <PhoneInput
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    inputStyle={{
                      width: "100%",
                      background: "white",
                      color: "black",
                      
                    }}
                    dropdownStyle={{ height: "110px", width:'auto' }} 
                  />
                  {submitted && !phoneNumber &&<div className="text-sm text-amber-600" >Phone Number is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <button
                    className=" flex w-full h-[34px] mt-5 mb-10 items-center justify-center text-white lg:hover:text-black text-base border border-transparent hover:border-white lg:hover:border-black bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
                    onClick={handleSellerRegister}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>  
  );
};

export { SellerSignupPage };
