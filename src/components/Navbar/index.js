import React, {useState , useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../store/userSlice'

import { Logout } from '../line'

import { useNavigate  } from "react-router-dom"
// import { useSelector, useDispatch } from 'react-redux'
import liff from '@line/liff'
import {
    Nav, 
    NavbarContainner ,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavBtnLogout
} from './NavbarElement'

const Navbar = ({ toggle }) => {
    const [scrollNav , setScollNav] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const myUser = useSelector((state) => state.masterbenz.user)

    const onChangeNav = () => {
        if(window.scrollY >= 80) {
            setScollNav(true)
        }else{
            setScollNav(false)
        }
    }
 

    // const runApp = () => {
    //     const email =  liff.getDecodedIDToken().email;
    //     const idToken = liff.getIDToken()
    //     // setIdToken(idToken)
    //     liff.getProfile().then(profile => {
    //       // alert('in')
    //       //  console.log(idTokendecde)
    //       //  console.log(idToken)
    //       //  console.log(profile)
    //         let myData = {
    //           displayName : profile.displayName ,
    //           pictureUrl : profile.pictureUrl , 
    //           userId : profile.userId ,
    //           email: email,
    //           idToken: idToken ,
    //           statusMessage : profile.statusMessage
    //         }
    //         // console.log(myData)
    //         dispatch(login(myData))
    //         // setDisplayName(profile.displayName)
    //         // setPictureUrl(profile.pictureUrl)
    //         // setUserId(profile.userId)
    //         // navigate("/");
    //     }).catch(err => console.error(err))
    // }

    useEffect(() => {
        liff.init({ liffId : '1657361581-Px2gOaOL'}, () => {
            // if(liff.isLoggedIn()) {
            //     runApp()
            // }
          }, err => console.error(err))

        window.addEventListener('scroll' , onChangeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}} > 
     <Nav scrollNav={scrollNav}>
        <NavbarContainner>
            <NavLogo to='/' onClick={toggleHome}><img src={require('../../img/favicon.ico')} alt="react"></img></NavLogo>
            <MobileIcon onClick={toggle} > 
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="About"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                    > About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="What"  smooth={true} duration={500} spy={true} exact='true' offset={-80} > What I do</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="Experience"  smooth={true} duration={500} spy={true} exact='true' offset={-80} >Experience</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="TechStack"  smooth={true} duration={500} spy={true} exact='true' offset={-80} >TechStack</NavLinks>
                </NavItem>
            </NavMenu>
            <div>
                
            </div>
                {/* <NavBtn>
                   
                   
                    {myUser.idToken == '' ?
                     <NavBtnLink to="/signin">Login</NavBtnLink> : 
                     <NavBtnLogout  onClick={() => Logout(navigate)}>Logout</NavBtnLogout>
                     }
                    <img src={require('../../img/cherdpong.jpeg')} height={50} alt="react"></img>
                </NavBtn> */}
        </NavbarContainner>
     </Nav>
     </IconContext.Provider>
    </>
  );
}

export default Navbar;
