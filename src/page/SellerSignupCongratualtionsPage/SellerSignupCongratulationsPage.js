import React from "react";
import img from "../../assets/images/signupcongratualtions.png";
import { Header1 } from "../../components/header1";
const SellerSignupCongratuationsPage = () =>{
    return(
        <div>
            <div className="lg:hidden">
                <Header1/>
            </div>
            <div className="h-screen w-full lg:w-1/2 flex items-center m-auto">
                <div className="">
                    <div className="w-full">
                        <img src={img} alt=""/>
                    </div>
                    <div className="w-full text-center ">
                        <div className="flex justify-center">
                            <div className=" text-[24px] font-bold w-[212px] lg:w-full">
                                Congratulations for Signing Up!
                            </div>
                        </div>
                        <div className="text-sm mt-3">
                            For the next step, please wait for the approval.
                        </div>
                        <div className="flex justify-center">
                            <div className="text-sm mt-3 w-[242px] lg:w-full">
                                Please contact us for more information at <span className="text-[#FC0841]">vrmallsolutions.</span>
                            </div>
                        </div>
                        <a href="/sellerhomepage" className="text-sm mt-3 hover:text-[#FC0841]">
                            Go Back to Homepage
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

}
export {SellerSignupCongratuationsPage};