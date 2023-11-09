import React , { useState } from 'react'
import './style.css'
import Bannericon1 from '../../assets/bannericon1.png'
import Bannericon2 from '../../assets/bannericon2.png'
import Bannericon3 from '../../assets/bannericon3.png'

function Banner() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [textInput, setTextInput] = useState('');
    const [textArea, setTextArea] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
    };
  return (
    <section className='banner-bg py-5'>
        <div className="container overflow-hidden py-4">
        <div className="row">
            <div className="col-lg-8 col-12 text-center text-md-start text-lg-start">
                <p className='banner-heading'>EBOOK <br className='banner-br' /> PUBLISHING <br className='banner-br' /> SERVICES!</p>
                <p className='banner-para1'>Experience the Fastest Book Publishing Services. Align <br className='banner-br' /> Yourself With a Leading Book Marketing Company</p>
                <p className='banner-para2'>Guaranteed enlistment in the Amazon Top Seller List. Ensuring the <br className='banner-br' /> exposure your book deserve.</p>
                <ul className='d-flex gap-3 banner-ul'>
                    <li className='banner-li text-nowrap'>48 Hour Delivery</li>
                    <li className='banner-li text-nowrap border-start border-end px-3'>Unlimited Revisions</li>
                    <li className='banner-li text-nowrap'>Get Accepted To Amazon Fast</li>
                </ul>
                <div className="d-flex gap-3 justify-content-center justify-content-md-start justify-content-lg-start">
                    <button className='btn1 text-nowrap'>800-898-8011</button>
                    <button className='btn2 text-nowrap'>Get A Free Quote</button>
                </div>
                <div className="logo-icons d-flex gap-4 justify-content-center justify-content-md-start justify-content-lg-start mt-4 ms-2">
                 <img className='b-icons' src={Bannericon1} alt="" />
                 <img className='b-icons' src={Bannericon2} alt="" />
                 <img className='b-icons' src={Bannericon3} alt="" />
                </div>
            </div>
            <div className="col-lg-4 col-12 mt-5 mt-lg-0 d-flex justify-content-center">
            <div className='form-div py-3 bg-dark'>
      <h2 className='form-heading1'>Signup & Get</h2>
      <h2 className='form-heading2'>50% Discount</h2>
      <h4 className='form-h4'>Limited Time Offer</h4>

      <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center gap-2'>
        <input
          className='banner-inputs'
          type="text"
          placeholder="Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          className='banner-inputs'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='banner-inputs'
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <input
          className='banner-inputs'
          type="text"
          placeholder="eBook Publishing"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />

        <textarea
        id='banner-inputs'
         className='banner-inputs'
         rows={4}
          placeholder="Message"
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        />

        <button className='form-btn' type="submit">Submit</button>
      </form>
    </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Banner
