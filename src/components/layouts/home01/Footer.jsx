import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <div
        className='section slide-personal-Intro-sixth slide-dark'
        id='contact'
      >
        <footer id='footer' className='footer footer-s1 footer-s1-home1'>
          <div
            id='footer-widget'
            className='footer-widget-s1 footer-widget-line bg-s1 position-relative'
          >
            <div className='container'>
              <div className='row d-lg-flex align-items-center text-center'>
                <div className='col-lg-12'>
                  <h3 className='widget-title larger lt-sp06'>
                    Stay Connected
                  </h3>
                </div>
                <div className='col-lg-12'>
                  <div className='widget-info'>
                    <p className='address'>Faisalabad, Pakistan</p>
                    <p className='mail'>mfahadali744@gmail.com</p>
                    <p className='phone'>+92 316 7444714</p>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='site-list site-list-pdl text-center'>
                    <a
                      className='bg-s1'
                      href='https://web.facebook.com/rubixians.hackers'
                    >
                      <i className='fa fa-facebook' aria-hidden='true' />
                    </a>
                    <a
                      className='bg-s2'
                      href='https://www.linkedin.com/in/muhammad-fahad-ali-5a60928a/'
                    >
                      <i className='fa fa-linkedin' aria-hidden='true' />
                    </a>
                    <a
                      className='bg-s3'
                      href='https://www.instagram.com/fahadbinarshad/'
                    >
                      <i className='fa fa-instagram' aria-hidden='true' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='bottom' className='bottom-s1'>
            <div className='container d-lg-flex justify-content-between'>
              <div className='copyright lt-sp02'>
                © Coder Cousins, 2020 All rights reserved.
              </div>
              <div className='socials-list color-s1'>
                <a href='https://web.facebook.com/rubixians.hackers'>
                  <i className='fa fa-facebook' aria-hidden='true' />
                </a>
                <a href='https://www.linkedin.com/in/muhammad-fahad-ali-5a60928a/'>
                  <i className='fa fa-linkedin' aria-hidden='true' />
                </a>
                <a href='https://www.instagram.com/fahadbinarshad/'>
                  <i className='fa fa-instagram' aria-hidden='true' />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
