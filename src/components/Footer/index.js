import React from 'react';
import {
    FaFacebook ,
    FaInstagram ,
    FaYoutube ,
    FaTwitter ,
    FaLinkedin ,
    FaLine
} from 'react-icons/fa'
import { 
    FooterContainer , 
    FooterWrap ,
    FooterLinkContainer ,
    FooterLinkWrapper,
    FooterLinkItems , 
    FooterLinkTitle ,
    FooterLink ,
    SocialMedia ,
    SocialMediaWrap ,
    SocialLogo , 
    WebsiteRights ,
    SocialIcons , 
    SocialIconLink ,

} from './FooterElement'

import NT  from '../../img/nt.png'



const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                <FooterLinkItems>
                        <FooterLinkTitle>Contact me   </FooterLinkTitle>
                            <FooterLink to="/">Email: benz-zy@hotmail.com</FooterLink>
                            <FooterLink to="/">IDLine: benzwarza</FooterLink>
                            <FooterLink to="/">Tel: 0968869014</FooterLink>
                            <FooterLink to="/"> </FooterLink>
                         
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Address  </FooterLinkTitle>
                            <FooterLink to="/">116/11 road pholyothin54 soi tiansoun1 </FooterLink>
                            <FooterLink to="/">Saimai khongtanon 10220</FooterLink>
                            <FooterLink to="/">Bangkok</FooterLink>
                            <FooterLink to="/">Thailand</FooterLink>
                          
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>MyWork   </FooterLinkTitle>
                            <FooterLink to="/"><img width="20rem" height="20rem" style={{marginRight:10}} src={NT}/>National Telecom Public Company limited</FooterLink>
                            <FooterLink to="/">89/2 road jangwattana</FooterLink>
                            <FooterLink to="/">Laksi tungsonghong 10210</FooterLink>
                            <FooterLink to="/">Bangkok Thailand</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>  
            
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">Masterbenz</SocialLogo>
                    <WebsiteRights>Masterbenz @ {new Date().getFullYear()} All Right reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/cherdpong.peungtuan" target="_black" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        {/* <SocialIconLink href="/" target="_black" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_black" aria-label="Youtube">
                            <FaLine />
                        </SocialIconLink> */}
                        {/* <SocialIconLink href="/" target="_black" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink> */}
                        <SocialIconLink href="https://www.linkedin.com/in/cherdpong-puengtuean-b0813322a/" target="_black" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
      
    </FooterContainer>
  );
}

export default Footer;
