import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css'; 
import Icon1 from '../../assets/testimonial1.png'
import Icon2 from '../../assets/testimonial2.png'
import Icon3 from '../../assets/testimonial3.png'



// import Icon8 from '../../assets/book8.png';
// import { FcPrevious, FcNext } from 'react-icons/fc';

const OwlCarouselSlider = () => {
  const owlCarouselRef = useRef();

  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000,
    smartSpeed: 450,
    nav: false,
  
    responsive: {
      0: {
        items: 1,
        
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <div className="container-fluid" id=''>
      <div className="row">
        <div className="col-12">
      {/* <FcPrevious className="slider-icon" onClick={() => owlCarouselRef.current.prev()} /> */}
      <OwlCarousel ref={owlCarouselRef} className="owl-theme custom-owl" {...options}>
        <div className="item mb-5 mt-5 pb-5">
          <img src={Icon1} alt="Icon 1" className='text-center' id='images' />
        </div>
        <div className="item mb-5 mt-5 pb-5">
          <img src={Icon2} alt="Icon 2" className='text-center' id='images' />
        </div>
        <div className="item mb-5 mt-5 pb-5">
          <img src={Icon3} alt="Icon 3" className='text-center' id='images' />
        </div>
        {/* <div className="item mb-5 mt-5">
          <img src={Icon4} alt="Icon 4" className='text-center' id='images' />
        </div>
        <div className="item mb-5 mt-5">
          <img src={Icon5} alt="Icon 5" className='text-center' id='images' />
        </div>
        <div className="item mb-5 mt-5">
          <img src={Icon6} alt="Icon 6" className='text-center' id='images' />
        </div>
        <div className="item mb-5 mt-5">
          <img src={Icon7} alt="Icon 7" className='text-center' id='images' />
        </div> */}
          {/* <div className="item mb-5 mt-5">
            <img src={Icon8} alt="Icon 8" className='text-center' id='images' />
          </div> */}
        {/* <div className="item">
          <img src={Icon8} alt="Icon 8" />
        </div> */}
      </OwlCarousel>
      </div>
      </div>
      {/* <FcNext className="slider-icon" onClick={() => owlCarouselRef.current.next()} /> */}
    </div>
  );
};

export default OwlCarouselSlider;
