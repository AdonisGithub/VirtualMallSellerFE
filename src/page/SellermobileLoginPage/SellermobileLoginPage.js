import React, { useState} from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Actions from "../../_actions";

const SellermobileLoginPage = () => {
    const [seller, setSeller] = useState({
        NameOrEmail: "",
        password: "",
      });
      const [submitted, setSubmitted] = useState(false);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setSeller((seller) => ({ ...seller, [name]: value }));
      };
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleSellerLogin = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (seller.NameOrEmail && seller.password) {
          const sellerlogindata = {
            NameOrEmail: seller.NameOrEmail,
            password: seller.password,
          };
          dispatch(Actions.sellerlogin(sellerlogindata, navigate));
        }
      };

  return (
    <div className="h-screen flex lg:hidden bg-[#EDE5EF]">
        <div className="flex w-full  justify-center items-center">
            <div className="w-full h-full flex items-center justify-center ">
                <div className=" w-[280px]">
                    <a href='/sellerhomepage'className="font-bold text-3xl">x</a>
                    <span className="flex  mt-[114px] items-center justify-center mb-[24px]  font-bold text-3xl tracking-tight text-black ">
                        LOGO
                    </span>
                    <h1 className="text-black font-bold text-2xl mb-[19px] flex items-center justify-center">
                        Log in
                    </h1>
                    <div className="flex mb-[33px] items-center justify-center">
                        <p className="text-black font-bold">Not yet a member?</p>&nbsp;&nbsp;
                        <a href="/sellersignup" className="text-red-600  hover:text-black">
                        Sign Up
                        </a>
                    </div>
                    <div className="w-full   m-auto mb-[19px]">
                        <h1 className="text-black">Fullname or Email </h1>
                        <input
                            className="border border-black h-[48px] rounded-lg py-1 px-1   w-full bg-transparent  text-black "
                            type="text"
                            name="NameOrEmail"
                            placeholder="Fullname or Emall*"
                            value={seller.NameOrEmail}
                            onChange={handleChange}
                        />
                        {submitted && !seller.NameOrEmail &&<div className="text-sm text-amber-600" >Name or Email is required</div>}
                    </div>
                    <div className="w-full   m-auto mb-[32px]">
                        <h1 className="text-black">Password </h1>
                        <input
                            className="border border-black h-[48px] rounded-lg py-1 px-1  w-full bg-transparent  text-black "
                            type="password"
                            name="password"
                            placeholder="Password*"
                            value={seller.password}
                            onChange={handleChange}
                        />
                        {submitted && !seller.password &&<div className="text-sm text-amber-600" >Password is required</div>}
                    </div>
                    <div className="flex mb-3 items-center justify-center">
                        <a href="/resetpasswordrequest1" className="text-red-600  hover:text-black font-bold">
                            Forgot Password
                        </a>
                    </div>
                    <div className="w-full   m-auto">
                        <button
                            className=" flex w-full mt-5 h-[48px] mb-[196px] items-center justify-center text-white hover:text-black text-base border border-transparent hover:border-black bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
                            onClick={handleSellerLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export { SellermobileLoginPage };
