import React, { useState } from "react";
import "./style.css";
import footerimg1 from "../../assets/footerimg1.png";
import footerbtn from "../../assets/footerbtn.png";
import icon1 from "../../assets/footericon1.png";
import icon2 from "../../assets/footericon2.png";
import icon3 from "../../assets/footericon3.png";
import icon4 from "../../assets/footericon4.png";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

function Footers() {
  const navigate = useNavigate();
  const handleClick = () => {
     navigate("/thankyou")
 }
 const navigate1 = useNavigate();
 const handleClick1 = () => {
  navigate(-1)
}
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here, such as validating or submitting the email
    console.log("Submitted email:", email);
    // You can add further functionality for form submission here
 
  
  const templateParams = {
   
    email,
  };
  emailjs.send('service_tcz1rzs', 'template_st6ox0b', templateParams,'dXfYY5TzWnD3c7CWV',event.target)
  .then((response) => {
    console.log('Email sent successfully:', response);
    handleClick();
    // You can add further logic, like displaying a success message
  })
  .catch((error) => {
    console.error('Error sending email:', error);
    // Handle error
  });
};
  
  return (
    <section className="footers-bg pt-5">
        <div className="container-fluid overflow-hidden bg-dark">
      <div className="row d-flex justify-content-center">
      <div className="left col-lg-5 col-md-9 col-12 mx-lg-4 d-flex flex-column justify-content-center">
            <img className="w-25" src={footerimg1} alt="" />
            <p className="footer-para">
              When you work with Fyra, it's all about you: your path, your
              profits, your voice, and your book. We are here to support you on
              your journey to publication, making it as seamless as possible,
              regardless of the road you choose. If you’re an independent
              author, we’ll help you self-publish your book as e-books,
              audiobooks, hardcover and paperback book worldwide – all while
              ensuring it is error-free, compelling, and visually attractive.
            </p>
          </div>
          <div className="right col-lg-5 col-md-9 col-12 mx-lg-4 d-flex flex-column justify-content-center py-5">
            <p className="footer-para2">Subscribe To Our Newsletter</p>
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                className="email-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange} required
              />
             <button className="btnfooter bg-dark"> <img className="emailbtn" src={footerbtn} alt="" /></button>
            </form>
            <div className="icons d-flex gap-3 mt-4">
            <img className="icons-w" src={icon1} alt="" />
            <img className="icons-w" src={icon2} alt="" />
            <img className="icons-w" src={icon3} alt="" />
            <img className="icons-w" src={icon4} alt="" />
            </div>
          </div>
        <div className="col-12 py-2 footers-bg">
            <p className="copyright mt-2">2023 Fyra Publishing | Self Publishing Made Easy!</p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Footers;
