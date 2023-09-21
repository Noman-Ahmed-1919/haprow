import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import employe1 from "../images/employe1.png"
import employe2 from "../images/employe2.png"
import employe3 from "../images/employe3.png"
import employe4 from "../images/employe4.png"


const Teamslider1 = () => {


    const [currentSlide, setCurrentSlide] = useState(0);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: currentSlide, // Set the initial slide

      };


      const sliderRef = React.createRef();

      const handleNextSlide = () => {
        if (currentSlide < 3) {
          sliderRef.current.slickNext();
          setCurrentSlide(currentSlide + 1);
        }
      };
    
      const handlePrevSlide = () => {
        if (currentSlide > 0) {
          sliderRef.current.slickPrev();
          setCurrentSlide(currentSlide - 1);
        }
      };
    
  return (
    <>


<div className='container'>
    <div className='row'>
        <div className='col-12'>

    
<h1 className='h1-meet'>Meet Event Speakers</h1>



<div className="team-slider-container">
      <Slider ref={sliderRef} {...settings}>
        
        
        
      <div className="team-slide">
          <img src={employe1} alt="Team 1" />
          <div className="team-content">
            <h3 style={{color:"white"}}>Shoo Phar Dhie</h3>
            <p style={{color:"white"}}>UX Lead at Facebook</p>
          </div>
        </div>
        <div className="team-slide">
          <img src={employe2} alt="Team 2" />
          <div className="team-content">
          <h3 style={{color:"white"}}>Shoo Phar Dhie</h3>
            <p style={{color:"white"}}>Product Manager at Google</p>
          </div>
        </div>



        <div className="team-slide">
          <img src={employe3} alt="Team 3" />
          <div className="team-content">
          <h3 style={{color:"white"}}>Shoo Phar Dhie</h3>
            <p style={{color:"white"}}>Sr. UX Designer at Apple</p>
          </div>
        </div>
        <div className="team-slide">
          <img src={employe4} alt="Team 4" />
          <div className="team-content">
          <h3 style={{color:"white"}}>Shoo Phar Dhie</h3>
            <p style={{color:"white"}}>UX Lead at Facebook</p>
          </div>
        </div>

        <div className="team-slide">
          <img src={employe2} alt="Team 4" />
          <div className="team-content">
          <h3 style={{color:"white"}}>Shoo Phar Dhie</h3>
            <p style={{color:"white"}}>UX Lead at Facebook</p>
          </div>
        </div>

        <div className="team-slide">
          <img src={employe3} alt="Team 4" />
          <div className="team-content">
          <h3 style={{color:"white"}}>Shoo Phar Dhie</h3>
            <p style={{color:"white"}}>UX Lead at Facebook</p>
          </div>
        </div>
        
        
        
        
        
        
        
        
              </Slider>
      <div className="arrow-button right" onClick={handleNextSlide}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path fill="#fff" d="M12 8l4 4-4 4v-3H8v-2h4V8z" />
</svg>
        </button>
      </div>
      <div className="arrow-button left" onClick={handlePrevSlide}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path fill="#fff" d="M12 8l-4 4 4 4v-3h4v-2h-4V8z" />
          </svg>
        </button>
      </div>
    </div>

    </div>

</div>

</div>
      



    </>
  )
}

export default Teamslider1
