import React, { useEffect, useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarLogout,
} from "./SidebarElement";

import liff from "@line/liff";

import { Logout } from "../line";

import { useNavigate } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';

import { useSelector, useDispatch } from "react-redux";

import { Offcanvas, Stack } from "react-bootstrap";

const Sidebar = ({ isOpen, toggle }) => {
  const myUser = useSelector((state) => state.masterbenz.user);
  const navigate = useNavigate();
  return (
    <Offcanvas style={{backgroundColor:'black' , justifyContent:'center'}} show={isOpen} onHide={toggle}  responsive="sm" >
      <Offcanvas.Header >
      <CloseButton variant="white" onClick={toggle} />
        {/* <Offcanvas.Title>Cart</Offcanvas.Title> */}
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="About"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            > 
              About
            </SidebarLink>
            <SidebarLink
              to="What"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              What I do
            </SidebarLink>
            <SidebarLink
              to="Experience"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Experience
            </SidebarLink>
            <SidebarLink
              to="TechStack"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              TechStack
            </SidebarLink>
          </SidebarMenu>
          {/* <SideBtnWrap>
            {myUser.idToken == "" ? (
              <SidebarRoute to="/signin">Sign In</SidebarRoute>
            ) : (
              <SidebarLogout onClick={() => Logout()}>Log out</SidebarLogout>
            )}
            asas
          </SideBtnWrap> */}
        </SidebarWrapper>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
