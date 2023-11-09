import React from 'react'
import './style.css'
import Bannerimg1 from '../../assets/banner2img.png'
import { useNavigate,Link } from "react-router-dom";

function Banner2() {
  const navigate = useNavigate();
  const handleClick = () => {
     navigate("/form")
 }
  return (
    <section className='comp3second-bg'>
      <div className="container overflow-hidden py-4">
      <div className="d-flex gap-3 justify-content-center justify-content-lg-end">
                    <button className='banner2btn1 text-nowrap'> <Link to="tel:800-898-8011"> 800-898-8011 </Link></button>
                    <button className='banner2btn2 text-nowrap' onClick={handleClick}>Get A Free Quote</button>
                </div>+
        <div className="row">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-12 d-flex flex-column justify-content-center text-center text-md-start text-lg-start mt-5 mt-lg-0">
            <p className="banner2-h">
            FYRA is Your Expert <span className='banner2-span'>
            Self-Publishing Assistant
            </span>

            </p>
            <p className="banner2-para">
            At Fyra Publishing, we pride ourselves on having facilitated the publishing of over 1450 books encom-passing all major and raregenres of literature (including Magical Realism, Romance, Autobiography, Tragedy, Bizarro Fiction, Flash Fiction, Spoetry, Canadiana, etc.). As a reliable and innovative publishing partner for writers aiming to become published authors, our mission is to empower authors with comprehensive solutions tailored to their needs. With our passion for literature and commitment to excellence, we are dedicated to helping our clients navigate the ever-evolving digital publishing landscape and achieve their goals.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start justify-content-lg-start pb-4">
            <button className="comp3btn text-nowrap mt-4" onClick={handleClick}>Get A Free Consultation</button>
            </div>
          </div>
          <div className="col-lg-5 col-12 text-center pb-4">
            <img className="w-75 w-lg-100 mt-5" src={Bannerimg1} alt="" />
          </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Banner2
