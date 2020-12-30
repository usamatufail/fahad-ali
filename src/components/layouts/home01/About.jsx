import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   profile: [
      //     {
      //       id: 1,
      //       classname: 'profile-link border-corner2 d-flex align-items-center',
      //       images: './images/section/05.png',
      //       alt: 'images',
      //       name: 'Upwork',
      //       normal: 'Hire Me',
      //     },
      //     {
      //       id: 2,
      //       classname: 'profile-link border-corner2 d-flex align-items-center',
      //       images: './images/section/06.png',
      //       alt: 'images',
      //       name: 'Gmail',
      //       normal: 'Send an email',
      //     },
      //     {
      //       id: 3,
      //       classname: 'profile-link border-corner2 d-flex align-items-center',
      //       images: './images/section/07.png',
      //       alt: 'images',
      //       name: 'Instagram',
      //       normal: 'Connect with me',
      //     },
      //     {
      //       id: 4,
      //       classname: 'profile-link border-corner2 d-flex align-items-center',
      //       images: './images/section/08.png',
      //       alt: 'images',
      //       name: 'Skype',
      //       normal: 'Connect with me',
      //     },
      //   ],
    };
  }
  render() {
    return (
      <div className='background-white'>
        <div className='d-lg-flex'>
          <div className='col-left'>
            <div
              className='featured-post animate-element wow delay5 fadeInUp'
              data-wow-delay='0.5s'
            >
              <img src='images/section/fads.jpg' alt='images' />
            </div>
          </div>
          <div className='col-right'>
            <div
              className='flat-spacer'
              data-desktop='105'
              data-mobile='50'
              data-smobile='50'
            ></div>
            <div className='flat-title t1'>
              <div
                className='animate-element wow delay5 fadeInDown'
                data-wow-delay='0.5s'
              >
                <h4 className='sub-title mg-b22'>About Me</h4>
                <h2 className='title-section mg-b26 color-d12'>
                  Hi, I am here to <span className='color-d4'>help you.</span>
                </h2>
                <p>
                  I have completed various types of website projects in
                  WordPress, Shopify & Custom Websites worldwide. I can make any
                  type of website with fantastic Design & Backend in any
                  language. I believe my abilities would be perfect for your
                  venture. I can finish projects within the necessary time
                  frame.
                </p>
              </div>
              <div
                className='animate-element wow delay5 fadeInUp'
                data-wow-delay='0.5s'
              >
                <div className='hire-me-s1 hire-me-about btn-general btn-hv-common d-lg-flex align-items-center'>
                  <Link
                    to='#'
                    className='btn-inner border-corner2 lt-sp08 text-white'
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='profile-list'>
          <div
            className='flat-carousel-box data-effect clearfix'
            data-gap='30'
            data-column='4'
            data-column2='3'
            data-column3='2'
            data-column4='1'
            data-column5='1'
            data-dots='false'
            data-auto='false'
            data-nav='false'
            data-loop='true'
          >
            <div className='owl-carousel'>
              {this.state.profile.map((data) => (
                <div className={data.classname} key={data.id}>
                  <div className='featured-post'>
                    <img src={data.images} alt={data.alt} />
                  </div>
                  <div className='content-inside'>
                    <h3 className='name'>
                      <Link to='#'>{data.name}</Link>
                    </h3>
                    <span className='t-normal'>{data.normal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default About;
