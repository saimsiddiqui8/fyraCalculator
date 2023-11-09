import React from 'react'
import "./style.css";
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function Comp4() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <section className='comp4-bg'>
        <div className="container py-5 overflow-hidden">
    <div className="row">
      <h2 className="comp4-h2 mt-3">
        {" "}
        Transform Your Vision via Book <br className="banner-br" />Publishing Services 
      </h2>
      <p className="comp4-para mt-3">
      It’s your right to spread your message via eBooks to the targeted audience. Make your book publishing goals come
        <br className="banner-br" /> true and witness yourself as a published and best-selling author with an attitude of gratitude. Get published and  <br className="banner-br" />{" "}hire a <span className='comp4-span'>book marketing company</span>  like us to share what you want in the form of best-selling eBooks.
      </p>
      <div className="d-flex gap-3 justify-content-center mt-3">
        <button className="comp2-btn1 text-nowrap"> <Link to="tel:(800) 898-8011"> (800) 898-8011</Link></button>
        <button className="comp2-btn2 text-nowrap" onClick={handleClick}>Get A Free Quote</button>
      </div>
    </div>
  </div>
    </section>
  )
}

export default Comp4
