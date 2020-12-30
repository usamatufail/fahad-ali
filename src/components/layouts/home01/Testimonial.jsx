import React, { Component } from 'react';

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: [
        {
          id: 1,
          img: './images/testimonial/deedra-determan.jpg',
          alt: 'images',
          text: `Fahad is THE MAN! The experience form the start to the end was 
            perfect! From is communication skills to the quality of the 
            work to his professionalism. I could honestly say that I don't 
            think we have ever worked with a freelancer at this level of 
            work. He communicated effectively to assure our job was done 
            perfect and the quality of work was like non other! We will 
            utilize his services and would hire him full time if we 
            could! Thank you Fahad for your excellence work sir!`,
          name: 'Deedra Determan',
          classname: 'testimonial-t1 text-center',
        },
        {
          id: 2,
          img: './images/testimonial/rodica.jpg',
          alt: 'images',
          text: `Fahad done a great job...love our new website! His patience is 
            incredible, even through multiple design changes and slow feedback, 
            he persevered with us to make sure the project was completed to a 
            high quality and great design aesthetic. I would highly recommend 
            Fahad and also hope to continue to engage his team on more projects 
            in the future. Thank you again for your heart and hard work and amazing talent!`,
          name: 'Rodica Stratan',
          classname: 'testimonial-t1 text-center',
        },
        {
          id: 3,
          img: './images/testimonial/ana-gaysa.jpg',
          alt: 'images',
          text:
            'Very fast service and always willing to make changes when needed. Thank you for a great job completed!',
          name: 'Anastasia',
          classname: 'testimonial-t1 text-center',
        },
        {
          id: 4,
          img: './images/testimonial/coach-jc.jpg',
          alt: 'images',
          text:
            'I love this guy like a brother! He always puts his everything into the job and always over delivered until the job is perfect and complete. His work is excellent and his communication skills are professional. He is a true professional and great at what he does!',
          name: 'Coach JC',
          classname: 'testimonial-t1 text-center',
        },
        {
          id: 4,
          img: './images/testimonial/seun.jpg',
          alt: 'images',
          text:
            'Enjoyable to work with!! Positive energy, knowledgeable and responsive',
          name: 'Seun Akinlotan',
          classname: 'testimonial-t1 text-center',
        },
        {
          id: 4,
          img: './images/testimonial/aspen.jpg',
          alt: 'images',
          text:
            'Fahad is the best! He is great to work with, fast, friendly and knowledgeable. He is willing to work with us until the project is finished, making changes until the client is happy. We greatly appreciate his accessibility and work ethic. I would recommend him to anyone for Web Design',
          name: 'Aspen Svec',
          classname: 'testimonial-t1 text-center',
        },
        {
          id: 4,
          img: './images/testimonial/natasha.jpg',
          alt: 'images',
          text:
            'I will definitely work with Fahad again. He was so good. He was helpful very skillful and has EXCELLENT WORK ETHIC!! very patient, kind and never complained.',
          name: 'Natasha Blake',
          classname: 'testimonial-t1 text-center',
        },
      ],
    };
  }
  render() {
    return (
      <div className='container'>
        <div className='custom-dot dot-t1 dot-s1 none-nav-default mg-dots-s1'>
          <div
            className='flat-carousel-box data-effect clearfix'
            data-gap={0}
            data-column={1}
            data-column2={1}
            data-column3={1}
            data-column4={1}
            data-column5={1}
            data-dots='true'
            data-auto='false'
            data-nav='false'
            data-loop='true'
          >
            <div className='owl-carousel'>
              {this.state.testimonial.map((data) => (
                <div className={data.classname} key={data.id}>
                  <div className='avatar mg-b29'>
                    <img src={data.img} alt={data.alt} />
                  </div>
                  <p className='lt-sp03 mg-b25'>
                    {data.text}
                    {/* {data.text01}
                    <br /> {data.text02} <br />
                    {data.text03} */}
                  </p>
                  <h3 className='name f-w600'>{data.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
