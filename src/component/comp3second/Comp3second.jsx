import React from 'react'
import "./style.css";
import comp3book2 from "../../assets/comp3book2.png";
import { useNavigate } from 'react-router-dom';

function Comp3second() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <section className='comp3second-bg'>
      <div className="container overflow-hidden py-4">
        <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center text-center text-md-start text-lg-start mt-5 mt-lg-0">
            <p className="comp3second-h mt-4">
            ‘Become an Author’ Program
            </p>
            <p className="comp3-para">
            Just as athletes, academics, and professionals have coaches and mentors, writers too can benefit immensely from specialized guidance in their craft. Whether you're an aspiring writer with a brilliant idea but unsure where to start, a writer stuck in the middle of your project seeking creative direction, or someone juggling time and energy constraints, our ‘Become an Author Program’ is your pathway to success. Our seasoned writing coaches offer personalized guidance at every stage, from outlining and plot development to building confidence and navigating the path to publishing. Don't let uncertainty hold you back; join our program today to unlock your full potential as a writer and bring your story to life.            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start justify-content-lg-start pb-4">
            <button className="comp3btn text-nowrap mt-4" onClick={handleClick}>Get A Free Consultation</button>
            </div>
          </div>
          <div className="col-lg-5 col-12 text-center pb-4">
            <img className="w-75 mt-5" src={comp3book2} alt="" />
          </div>
        </div>
    </div>
    </section>
  )
}

export default Comp3second

