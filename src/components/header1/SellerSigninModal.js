import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import React from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Actions from "../../_actions";

const SellerSigninModal=() => {

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

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
    <div className="flex">
      <button className="w-[216px] h-9 2xl:h-[48px]  flex items-center justify-center border border-transparent hover:border-black text-white hover:text-black bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
        onClick={openModal}
      >
        Signin
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className=" fixed inset-0 z-10 overflow-y-auto rounded-sm drop-shadow-xl"
          onClose={closeModal}
        >
          <div className="hidden lg:flex min-h-screen px-4 text-center items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex relative justify-center text-left align-middle transition-all transform bg-[#ede5ef] rounded-md w-1/3 xl:w-[28%] 2xl:w-[544px] m-auto">
                <button className="absolute -top-[8px] -right-2 text-white w-[25px] bg-[#ede5ef] rounded-sm drop-shadow-md" onClick={closeModal}>x</button>
                <div className="relative w-8/12 mt-8 xl:mt-12 2xl:mt-16 mb-8 xl:mb-12 2xl:mb-16">
                  <div className="w-full text-2xl text-black text-center mb-8 xl:mb-12 2xl:mb-16">
                    Login
                  </div>
                  <div className="w-full flex justify-center ">
                    <input
                      className="border rounded-md py-1 px-1 mb-2  w-full bg-transparent md:bg-white text-white md:text-black"
                      type="text"
                      name="NameOrEmail"
                      id="inputID"
                      placeholder="Fullname or Email*"
                      value={seller.NameOrEmail}
                      onChange={handleChange}
                    />
                  </div>
                  {submitted && !seller.NameOrEmail &&<div className="text-sm text-amber-600" >Name or Email is required</div>}
                  <div className="w-full flex justify-center mt-2 xl:mt-3 2xl:mt-5">
                    <input
                      className="border rounded-md py-1 px-1 mb-2 w-full bg-transparent md:bg-white text-white md:text-black"
                      type="password"
                      name="password"
                      id="inputID"
                      placeholder="Password*"
                      value={seller.password}
                      onChange={handleChange}
                    />
                  </div>
                  {submitted && !seller.password &&<div className="text-sm text-amber-600" >Password is required</div>}
                  <div className="w-full flex justify-center mt-2 xl:mt-3 2xl:mt-5">
                    <p className="text-black">Not yet a member?</p>&nbsp;&nbsp;
                    <a href="/sellersignup" className="text-[#BA9BCB]  hover:text-black">
                      Sign Up
                    </a>
                  </div>
                  <div className="w-full flex justify-center  xl:mt-1 2xl:mt-3">
                    <a href="/" className="text-[#BA9BCB]  hover:text-black">
                      Forgot Password
                    </a>
                  </div>
                  <div className="w-full flex justify-center mt-2 xl:mt-3 2xl:mt-5">
                    <button
                      className=" flex w-full h-[34px] mt-5 items-center justify-center text-white hover:text-black text-base border border-transparent hover:border-black bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
                      onClick={handleSellerLogin}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export {SellerSigninModal};