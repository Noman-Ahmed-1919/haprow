import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/img1.png";
import newicon from "../images/icon.png";

import man1 from "../images/man1.png";
import man2 from "../images/man2.png";
import man3 from "../images/man3.png";
import man4 from "../images/man4.png";



const Teamslider = () => {

    const settingsTestimonial = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 2,
        autoplay: true, // Enable automatic scrolling
        // autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
         
        ]
      };

      const teamData = [
        {
          name:"Carmelo Ippolito",
          designation:"Apes Planet",
          profile:img1,
          imageicon:man1,

        },
        {
          name:"Raza",
          designation:"Trustvibes",
          profile:img1,
          imageicon:man2,

        },
        {
          name:"Lars Fabricus",
          designation:"CEO & FOUNDER of Roburna Blockchain",
          profile:img1,
          imageicon:man3,

        },
        {
          name:"Bjorn Mattens",
          designation:"Passive Income",
          profile:img1,
          imageicon:man4,

        },
        {
          name:"Hassan Shahid",
          designation:"CEO of Berg Media",
          profile:img1,
          imageicon:man1,
        }
      ];


  return (
    <>
      
      <section className='testmonialSec1' id='sec8'>
        <div className='backteamcolor'>

\        <div className="effect"></div>
        <div className="container">

     
            <h4 className='pr secHeading text-center' id='teamour'>Our team</h4>
            <h1 className='pr secHeading text-center' id='withour'>Meet with our awsome<br></br> team</h1>

            <div className="px-3">
                <Slider {...settingsTestimonial}>
                    {teamData.map((item,key)=>(
                        <div className=" mb-4 p-3 animatable fadeInUp" key={key}>

                            <TestCard imageawsome={item.imageicon}  desc={item.description} image={item.profile} name={item.name} desig={item.designation} />
                        </div>
                    ))}
                   
                </Slider>
            



            </div>
        </div>

        </div>

    </section>





    </>
  )
}


const TestCard = ({imageawsome, image,name,desig,desc}) =>{
    return(
        <div className="testCard1">

                          <img className='img-fluid' src={imageawsome} alt="review" />

                          <ReadMore >
            {desc} 
            </ReadMore>
            <div className="profileDiv1">
                {/* <img className='img-fluid' src={image} alt="review" /> */}
                <div className='ms-22'>
                    <div className="namename">{name}</div>
                    <div className="desigdesig">{desig}</div>
                </div>
            </div>
           
            {/* <div className="desc">
            {desc} 
            </div> */}
        </div>
    )
}

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const [boxHeight, setboxHeight] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    // useEffect(()=>{
    //     var clientHeight = document.getElementById('desc').clientHeight;
    //     console.log(clientHeight);
    //     setboxHeight(clientHeight)
    // },[])

    return (
        <>
        {/* <div className={isReadMore ?"desc show5Line":"desc"} id='desc' >
            {text}
        </div>
        <span onClick={toggleReadMore} className="desc cursor-pointer" >
            {isReadMore  ? "read more" : " show less"}
        </span> */}
        </>
    );
  };


export default Teamslider
