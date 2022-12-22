import React, { useState, useEffect } from "react";
import liff from "@line/liff";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/userSlice";

export const Line = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initLine = () => {
    liff.init(
      { liffId: "1657361581-Px2gOaOL" },
      () => {
        liff.login();
      },
      (err) => console.error(err)
    );
  };

  const runApp = () => {
    const email = liff.getDecodedIDToken().email;
    const idToken = liff.getDecodedIDToken();
    // setIdToken(idToken)
    liff
      .getProfile()
      .then((profile) => {
        console.log(profile);
        // alert('in')
        //  console.log(idTokendecde)
        //  console.log(idToken)
        //  console.log(profile)
        let myData = {
          displayName: profile.displayName,
          pictureUrl: profile.pictureUrl,
          userId: profile.userId,
          email: email,
          idToken: idToken,
          statusMessage: profile.statusMessage,
        };
        // console.log(myData)
        localStorage.setItem("user", JSON.stringify(myData));

        dispatch(login(myData));
        // setDisplayName(profile.displayName)
        // setPictureUrl(profile.pictureUrl)
        // setUserId(profile.userId)
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    liff.init(
      { liffId: "1657361581-Px2gOaOL"  ,
      withLoginOnExternalBrowser: false, },
      () => {
        if (liff.isLoggedIn()) {
          runApp();
        }
      },
      (err) => console.error(err)
    );
    // if(liff.isLoggedIn()) {
    //   runApp()
    // }
  }, []);

  return (
    <div>
      <Button
        style={{ marginBottom: 5 }}
        variant="success"
        onClick={() => initLine()}
      >
        {" "}
        เข้าสู่ระบบ Line
      </Button>
    </div>
  );
};





export function Logout(navigate) {
  liff.logout();
  localStorage.clear();
  window.FB.getLoginStatus(function (response) {
    console.log(response)
    if (response && response.status === "connected") {
      window.FB.logout(function (response) {
        // document.location.reload();
      });
    }
  });

   
  window.location.reload(false);
}

export function initFacebookSdk() {
  return new Promise(resolve => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '1220783485407835',
        xfbml: true,
        version: 'v14.0'
      });
      resolve()
    };   
  });
}

export function loadFacebookSDK(d, s, id){
  return new Promise(resolve => {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    resolve()
  })
}

loadFacebookSDK(document, "script", "facebook-jssdk");
    initFacebookSdk();

