import { createSlice } from "@reduxjs/toolkit";
import jwt from 'jwt-decode'
import jwtDecode from "jwt-decode";
let token = localStorage.getItem('user');

// console.log(JSON.parse(myUser))
let myUser = JSON.parse(token)
// let myUser = {

// }
// if(token){
//    myUser = jwt(token)
//    console.log(myUser)
// }



const initialState = {
  value: " hello world masterbenz ",
  user: {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headline: myUser ? myUser.displayName : 'cherdpong puengtuean',
    description: myUser? myUser.statusMessage :`Hello, my name is Cherdpong Pungthuan, I'm27 years old, my nickname is Benz. I like programming and playing moba games, my programming experience is more than 3 years and my experience of playing moba games is more than 10 years. 
    ` ,
    buttonLabel: 'Get Start' ,
    imgStart: true,
    img:  myUser ? myUser.pictureUrl : require('../../src/img/cherdpong.jpeg'),
    alt: 'Car' ,
    dark: true,
    primary: true,
    darkText: false, 
    idToken : myUser ? myUser.idToken :'',
    email : myUser ? myUser.email : ''
  },

  loading: false,
};

export const userSlice = createSlice({
  name: "userStore",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.value = "สวัสดีครับ Login นะครับ";
      // console.log(action)
      // state.user.idToken = action.payload.idToken;
      // state.user.pictureUrl = action.payload.pictureUrl;
      state.user.idToken = action.payload.idToken;
      state.user.headline = action.payload.displayName;
      state.user.img =  action.payload.pictureUrl;
      state.user.description = action.payload.statusMessage;
      state.user.email = action.payload.email
      // state.user.userid = action.payload.userid;
      state.loading = true;
    },
    loginFacebook: (state, action) => {
      // const mydata = jwtDecode(action.payload.authResponse.accessToken)
      // console.log(mydata)

      state.user.idToken = action.payload.accessToken;
      state.user.headline = action.payload.name;
      // state.user.img =  action.payload.picture.data.url;
      // state.user.description = action.payload.statusMessage;
      state.user.email = action.payload.email
      // state.user.userid = action.payload.userid;
      state.loading = true;
    },
    logout: (state) => {
      state.value = "Logout นะครับ";
    },
  },
});

export const { login, loginFacebook, logout } = userSlice.actions;

export default userSlice.reducer;
