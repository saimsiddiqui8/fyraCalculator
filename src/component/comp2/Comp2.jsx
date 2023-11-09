import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Comp2() {
  const navigate = useNavigate();
  const handleClick = () => {
     navigate("/form")
 }
  return (
   <section className="comp2-bg">
     <div className="container py-5 overflow-hidden">
      <div className="row">
        <h2 className="comp2-h2 mt-3">
          {" "}
          What Can We Do As A Self- <br className="banner-br" /> Publishing
          Company For Our <br className="banner-br" /> Clients?
        </h2>
        <p className="comp2-para mt-lg-4">
          We acknowledge that it is not a guarantee that self-publishing books
          will not do well. We believe sincerity always
          <br className="banner-br" /> yields positive results. Hiring an online
          publishing service is both convenient and affordable. Our online book{" "}
          <br className="banner-br" /> publishing service helps your book get
          the attention it deserves. We make sure that we are doing whatever we
          can <br className="banner-br" /> to help you succeed. This commitment
          to our customer’s cause has helped us a lot in the past. With the help
          of our <br className="banner-br" /> dedication, we have been able to
          make self-publishing books easy. Our publishing services have helped
          our clients <br className="banner-br" /> sell millions of copies
          worldwide.
        </p>
        <div className="d-flex gap-3 justify-content-center mt-3">
          <button className="comp2-btn1 text-nowrap"><Link to="tel:(800) 898-8011">(800) 898-8011</Link></button>
          <button className="comp2-btn2 text-nowrap" onClick={handleClick}>Get A Free Quote</button>
        </div>
      </div>
    </div>
   </section>
  );
}

export default Comp2;
