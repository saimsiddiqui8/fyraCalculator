import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// import Services from '../Services/Services';
// import Portfolio from '../Portfolio/Portfolio';
// import BookCover from '../BookCover/BookCover';
// import Process from '../Process/Process';
// import Quote from '../Quote/Quote';
// import Author from '../Author/Author';
// import Faqs from '../Faqs/Faqs';
// import SliderTrusted from "../SliderTrusted/SliderTrusted"
import { useNavigate } from "react-router-dom";
import {AiOutlineCloseCircle} from 'react-icons/ai'


const Form = () => {
  const navigate = useNavigate();
  const handleClick = () => {
     navigate("/thankyou")
 }
 const navigate1 = useNavigate();
 const handleClick1 = () => {
  navigate("/")
}
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [contact, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  
  const [selfPublishingChecked, setSelfPublishingChecked] = useState(false);
  const [editingChecked, setEditingChecked] = useState(false);
  const [coverDesignChecked, setCoverDesignChecked] = useState(false);
  const [printingChecked, setPrintingChecked] = useState(false);
  const [illustrationChecked, setIllustrationChecked] = useState(false);
  const [interiorFormattingChecked, setInteriorFormattingChecked] = useState(false);

  const handleDropdownChange1 = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDropdownChange2 = (event) => {
    setSelectedOption1(event.target.value);
  };
  const handleDropdownChange3 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      selectedOption,
      selectedOption1,
      selectedOption2,
      isChecked,
      name,
      contact,
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
    <>
    <section className='bgg'>
      <div className="container">
        <div className="form-div p-4 text-white rounded mt-5">
<span className='d-flex justify-content-end'><AiOutlineCloseCircle onClick={handleClick1} style={{cursor:'pointer',fontSize:'2rem', color:'#FF9F20'}}/></span>
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <h2 className='h2-secondary2 fw-bolder pt-4  text-white'>START YOUR <span>PUBLISHING</span> JOURNEY</h2>
            </div>
            <div className="form-group ms-4">

              <select
                className="form-control-new rounded"
                value={selectedOption}
                onChange={handleDropdownChange1}
              >
                <option value="Do you have a manuscript ready?">Do you have a manuscript ready?</option>
                <option value="Yes, I am ready to publish today">Yes, I'am ready to publish today</option>
                <option value="Yes , I ll be ready to publish in 1 to 3 months">Yes, I'll be ready to publish in 1 to 3 months</option>
                <option value="Yes , I ll be ready to publish in 3 to 6 months">Yes, I'll be ready to publish in 3 to 6 months</option>
                <option value="No , I do not have a book or manuscript ready">No, I do not have a book or manuscript ready</option>
              </select>
            </div>
            <div className="form-group ms-4">

              <select
                className="form-control-new rounded"
                value={selectedOption1}
                onChange={handleDropdownChange2}
              >
                <option value="None">Have you publish before?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group ms-4">

              <select
                className="form-control-new rounded"
                value={selectedOption2}
                onChange={handleDropdownChange3}
              >
                <option value="What type of book do you plan for publishing?">What type of book do you plan for publishing?</option>
                  <option value="Business">Business</option>
                  <option value="Biography">Biography</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Non-fiction">Non-fiction</option>
                  <option value="optiHow-Toon6">How-To</option>
                  <option value="Autobiography/Memoir">Autobiography/Memoir</option>
                  <option value="Self-Help">Self-Help</option>
                  <option value="Children">Children</option>
                  <option value="Spiritual/Religious">Spiritual/Religious</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Art/Photography">Art/Photography</option>
                  <option value="CookBook">CookBook</option>
                  <option value="Other">Other</option>
              </select>
            </div>
            <p className='ms-4 mt-2 form-para text-white'>What services are you looking for?</p>
            <div className="form-group2 ms-4 ">
              <label className="text-nowrap">
                <input
                  type="checkbox"
                  className="label-box"
                  checked={selfPublishingChecked}
                  onChange={() => setSelfPublishingChecked(!selfPublishingChecked)}
                />
                <span className="checkmark"></span>
                Publishing
              </label>
              <label className="text-nowrap">
                <input
                  type="checkbox"
                  className="label-box"
                  checked={editingChecked}
                  onChange={() => setEditingChecked(!editingChecked)}
                />
                <span className="checkmark"></span>
                Editing
              </label>
              <label className="text-nowrap">
                <input
                  type="checkbox"
                  className="label-box"
                  checked={coverDesignChecked}
                  onChange={() => setCoverDesignChecked(!coverDesignChecked)}
                />
                Cover Design
              </label>
              <label className="text-nowrap">
                <input
                  type="checkbox"
                  className="label-box"
                  checked={printingChecked}
                  onChange={() => setPrintingChecked(!printingChecked)}
                />
                Printing
              </label>
              <label className="text-nowrap">
                <input
                  type="checkbox"
                  className="label-box"
                  checked={illustrationChecked}
                  onChange={() => setIllustrationChecked(!illustrationChecked)}
                />
                Illustration
              </label>
              <label className="text-nowrap">
                <input
                  type="checkbox"
                  className="label-box"
                  checked={interiorFormattingChecked}
                  onChange={() => setInteriorFormattingChecked(!interiorFormattingChecked)}
                />
                Formatting
              </label>
            </div>
            <div className="form-group ms-4">

              <input
                placeholder='Your Name'
                type="text"
                className="form-control-new rounded"
                value={name}
                onChange={handleNameChange}required
              />
            </div>
            <div className="form-group ms-4">
              <input
                placeholder='Phone Number'
                type="tel"
                className="form-control-new rounded"
                value={contact}
                onChange={handlePhoneNumberChange}required
              />
            </div>
            <div className="form-group ms-4">

              <input
                placeholder='Email Address'
                type="email"
                className="form-control-new rounded"
                value={email}
                onChange={handleEmailChange}required
              />
            </div>
            <div className="ms-4">
              <button type="submit" className="btnsubmit2">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      </section>
      {/* <div className='mt-5'>
        <SliderTrusted />
      </div>
      <Services />
      <Portfolio />
      <Process />
      <BookCover />
      <Author />
      <Quote />
      <Faqs /> */}
    </>
  );
};

export default Form;
