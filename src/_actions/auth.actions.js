import { userConstants } from '../_constants';
import axios from "axios";
import  {SuccessAlert, DefaultAlert} from "../components/common/ToastAlert";
import {ErrorAlert} from "../components/common/ToastAlert";
const API_URL = "https://theinfiniteplaza.com";
//const API_URL = "http://localhost:8080";

export function sellerregister(sellerregisterdata, navigate) {
    return dispatch => {
        axios.post(API_URL + "/api/auth/sellersignup", sellerregisterdata)
           .then(res => { 
                   //console.log('received data:', res.data);
                   dispatch({
                       type: userConstants.SELLERREGISTER_SUCCESS, 
                       payload: "success"
                   });
                   if(navigate) {
                    navigate('/sellersignupcongratulations')
                }
               }
           )
           .catch(error => {
               //console.log("received error data:", error.response.data)
               ErrorAlert(error.response.data);
               dispatch({
                   type: userConstants.SELLERREGISTER_FAILURE, 
                   payload: "error"
               });
           });
    };

}

export function sellerlogin(sellerlogindata,navigate) {
   return dispatch => {
       //console.log('sended data:', sellerlogindata);
       axios.post(API_URL + "/api/auth/sellersignin", sellerlogindata)
          .then(res => { 
                    //console.log('received data:', res.data);
                    SuccessAlert("Login Success!");
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('user', JSON.stringify(res.data));
                    dispatch({
                        type: userConstants.SELLERLOGIN_SUCCESS, 
                        payload: res.data
                    });
                    if(navigate) {
                        navigate('/sellervirtualmal')
                    }
              }
          )
          .catch(error => {
              //console.log("received error data:", error.response.data)
              ErrorAlert(error.response.data);
              dispatch({
                  type: userConstants.SELLERLOGIN_FAILURE, 
                  payload: "error"
              });
          });
   };

};