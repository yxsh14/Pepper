import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {MdMail} from 'react-icons/md'
import "../styles/footer.css";
export const Footer=()=> {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted footerClass'>
      <section className='footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol id='leftFooterBox' md='3' lg='4' xl='3' className='mb-4 mr-5'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Pepper
              </h6>
              <p>
                Pepper is one of the most reliable delievery patlform magement service to automate your network.
              </p>
              <div>
          <button className="btn">Get Started</button>
          <div className="icons">
            <AiFillInstagram />
            <AiOutlineTwitter />
            <MdMail />
          </div>
        </div>
            </MDBCol>

            

            <MDBCol id='midFooterBox' md='3' lg='2' xl='2' className='mb-4 '>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                Home
              </p>
              <p>
                Blog
              </p>
              <p>
                BlogTemplate
              </p>
              <p>
                Pricing
              </p>
              <p>
                PricingEcommerce
              </p>
              <p>
                About
                </p>
              <p>
                Careers
              </p>
              <p>
                Careers Template
              </p>
              <p>
                Contact
              </p>
            </MDBCol>

            <MDBCol id='rightFooterBox' md='4' lg='3' xl='3' className=' mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Template pages</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Style guide
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
               Licenses
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> Changelog
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Peepers.com
        </a>
      </div>
    </MDBFooter>
  );
}