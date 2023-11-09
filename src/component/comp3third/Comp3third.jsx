import React from 'react'
import "./style.css";
import comp3book2 from "../../assets/pic2.png";
import { useNavigate } from 'react-router-dom';

function Comp3third() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <section className='comp3second-bg'>
    <div className="container overflow-hidden py-4">
      <div className="row d-flex justify-content-center">
      <div className="col-lg-6 col-12 d-flex flex-column justify-content-center text-center text-md-start text-lg-start mt-5 mt-lg-0">
          <p className="comp3third-h mt-4">
          Get Published and Become the Best- Selling Author
          </p>
          <p className="comp3-para">
          At Fyra Publishing, we believe in empowering writers at every stage of their journey, whether you're just starting out or an experienced wordsmith. Our comprehensive suite of services is designed to meet all your publishing needs under one roof: From crafting your manuscript to editing, proofreading, formatting, packaging, marketing, printing, and publishing, we've got you all covered. We're here to bring your vision to life, ensuring your book reflects your unique voice and ideas, so hop aboard and get published today!          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start justify-content-lg-start pb-4">
          <button className="comp3btn text-nowrap mt-4"onClick={handleClick}>Get A Free Consultation</button>
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

export default Comp3third
