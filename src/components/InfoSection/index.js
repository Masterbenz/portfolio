import React from "react";
import { Button } from "../ButtonElement";
import pdf from '../../img/CHERDPONG_PUENGTUEAN_DEV.pdf'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElement";

import {
  FaFacebook ,
  FaInstagram ,
  FaYoutube ,
  FaTwitter ,
  FaLinkedin
} from 'react-icons/fa'

import { 
  SocialIcons , 
  SocialIconLink ,

} from '../Footer/FooterElement'


import Fade from "react-reveal/Fade";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  email,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={'About'}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <Fade right>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darktext={darkText}>{description}</Subtitle>
                  <Subtitle darktext={darkText}>{email}</Subtitle>
                  {/* <div email={email}></div> */}
                  <BtnWrap>
                  {/* <a href={pdf}>DownloadCv</a> */}

                    <Button
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      href={pdf}
                      target="_black" 
                    >
                      Resume
                    </Button>
                  </BtnWrap>
                </TextWrapper>
                <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/cherdpong.peungtuan" target="_black" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        {/* <SocialIconLink href="/" target="_black" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink> */}
                        {/* <SocialIconLink href="/" target="_black" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_black" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink> */}
                        <SocialIconLink href="https://www.linkedin.com/in/cherdpong-puengtuean-b0813322a/" target="_black" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
              </Fade>
            </Column1>
            <Column2>
              <Fade left>
                <ImgWrap>
                  <Img src={'https://profile.line-scdn.net/0hAdRfoFpuHkt_HwmbPi5gNA9PHSFcbkdZVXlXKEoZFSxGe1xKUH9QLU4bRi9BKVoYWntZek8WRylzDGktYUnif3gvQHxGKVsaU31YrQ'} alt={alt} />
                </ImgWrap>
              </Fade>
            </Column2>
          </InfoRow>
        </InfoWrapper>
        {/* texttest */}
      </InfoContainer>
    </>
  );
};

export default InfoSection;
