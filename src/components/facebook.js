import React, { useState , useEffect } from 'react'
import FacebookLogin from 'react-facebook-login';
import { Button } from 'react-bootstrap';
import { useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login, loginFacebook , logout } from '../store/userSlice'
import { LockClosedIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const Facebook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    // const FB = window.FB;

   const componentClicked = () => {
        console.log('click')
    }
    const responseFacebook = (response) => {
        console.log(response);
        // let myData = {
        //     displayName : response.displayName ,
        //     pictureUrl : response.pictureUrl , 
        //     userId : response.userId ,
        //     email: email,
        //     idToken: idToken ,
        //     statusMessage : response.statusMessage
        //   }
          // console.log(myData)
        //   localStorage.setItem('user', JSON.stringify(myData))

          dispatch(loginFacebook(response))
          // setDisplayName(profile.displayName)
          // setPictureUrl(profile.pictureUrl)
          // setUserId(profile.userId)
          navigate("/");
    }

    const onLoginClick = () => {
        // console.log('1') 
        window.FB.getLoginStatus(function(response) {
            if(response.authResponse == null){
                window.FB.login(function(response){
                  console.log(response)
                  dispatch(loginFacebook(response))
                  navigate("/");
                  },{scope: 'email,user_likes'});
            }else{
                   console.log(response)
                dispatch(loginFacebook(response))
                navigate("/");
            }
            // console.log(response)
        });
    };


    const logout = () => {
        window.FB.getLoginStatus(function(response) {
            if (response && response.status === 'connected') {
                window.FB.logout(function(response) {
                    document.location.reload();
                });
            }
        });
    }

    useEffect(() => {
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : '1220783485407835',
              cookie     : true,
              xfbml      : true,
              version    : 'v14.0'
            });
              
            window.FB.AppEvents.logPageView();   
              
          };
        
          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        // if(liff.isLoggedIn()) {
        //   runApp()
        // }
      }, [])


  
        return (
            <div class="text-center">
                {/* <FacebookLogin       
                    appId="1220783485407835"
                    autoLoad={false}
                    fields="name,email,picture"
                    size="small"
                    textButton="เข้าสู่ระบบ facebook"
                    onClick={() => componentClicked()}
                    callback={responseFacebook}
                /> */}
             
             <button>
            
              <span>
              <FontAwesomeIcon   class="rounded-full w-20 h-20 text-indigo " icon={faFacebook}/>
             </span>
             </button>
            </div>)
    

}

export default Facebook
    
