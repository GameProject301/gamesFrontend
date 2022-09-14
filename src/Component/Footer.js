/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRipple
} from 'mdb-react-ui-kit';
  import "./style.css";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
  import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons"
  


class Footer extends React.Component {
  render(){
  return (
    <div>


   <section>
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#2e3a46' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <div className='footer_row'>
          
              
            
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                {/* <a href='https://www.twitch.tv/' target="_blank">
                <img src='https://images.squarespace-cdn.com/content/v1/5283751ae4b0dbca22e947d8/1456304684381-YYLDMCPJEK72MWEJSUAY/image-asset.jpeg' className='foot_img' />
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a> */}
              </MDBRipple>
          
            
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='https://www.seagate.com/em/en/' target="_blank">
                  <img src='data:image/png;base64,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' className='foot_img' />
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
          
        
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='https://www.nvidia.com/en-us/' target="_blank">
                <img src='https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-p@2x.png' className='foot_img' />
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
           
           
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <a href='https://www.logitech.com/' target="_blank">
                <img src='https://logos-download.com/wp-content/uploads/2016/03/Logitech_logo_white.svg' className='foot_img' />
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            
           
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                {/* <a href='https://betway.com/en-jo/' target="_blank">
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/95/Betway_logo.jpg' className='foot_img' />
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a> */}
              </MDBRipple>
            
          </div>
        </section>
      </MDBContainer>

      <div className='footerPart' >
        <a  href='https://github.com/GameProject301' target='_blank' el='noreferrer noopener'
        className="facebookSocial"  rel="noreferrer">
         <p className="copyright_text">© 2022 GAME PROJECT, Inc. All Rights Reserved / 301 Game Project
         <span >
         <a  href="https://www.facebook.com/Pro-player-Website-105079872354301" target='_blank' el='noreferrer noopener'
        className="facebookSocial"  rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="3x"  />
      </a>
      <a  href="https://www.instagram.com/proplayers99s/" target='_blank' el='noreferrer noopener' className="instagramSocial" rel='noreferrer'>
        <FontAwesomeIcon icon={faInstagram} size="3x"  />
      </a>
         
         </span></p>
        </a>
      </div>
    </MDBFooter>
    </section>
    </div>
  );
  }
}
// color='#141b22'
export default Footer;