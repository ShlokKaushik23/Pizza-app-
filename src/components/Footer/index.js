import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

import {FooterContatiner, FooterWrapper, SocialMedia,SocialMediaWarp,SocialLogo,SocialIcon, SocialIconLink} from './FooterElements'

const Footer = () => {
  return(
    <FooterContatiner>
      <FooterWrapper>
        <SocialMedia>
            <SocialMediaWarp>
              <SocialLogo to="/">Pizza</SocialLogo>
               <SocialIcon>
              <SocialIconLink href="/" target="_blank"
              aria-label="Facebook" rel="noopener noreferrer">
              <FaFacebook/>

              </SocialIconLink>
              <SocialIconLink href="/" target="_blank"
              aria-label="Instagram" rel="noopener noreferrer">
              <FaInstagram/>

              </SocialIconLink>
              <SocialIconLink href="/" target="_blank"
              aria-label="Youtube" rel="noopener noreferrer">
              <FaYoutube/>

              </SocialIconLink>
              <SocialIconLink href="/" target="_blank"
              aria-label="Twitter" rel="noopener noreferrer">
              <FaTwitter/>

              </SocialIconLink>
              <SocialIconLink href="/" target="_blank"
              aria-label="LinkedIn" rel="noopener noreferrer">
              <FaLinkedin/>
                
              </SocialIconLink>
              </SocialIcon>
            </SocialMediaWarp>
        </SocialMedia>
      </FooterWrapper>
    </FooterContatiner>
  )
}

export default Footer;
