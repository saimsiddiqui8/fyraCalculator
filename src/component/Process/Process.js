import React from 'react'
import Heading from '../../assets/process.png'
import ProceesImg from '../../assets/processimg.png'
import R1 from '../../assets/r11.png'
import R2 from '../../assets/r22.png'
import R3 from '../../assets/r33.png'
import R4 from '../../assets/r44.png'
import R5 from '../../assets/r55.png'
import R6 from '../../assets/r66.png'
import R7 from '../../assets/r77.png'
import './style.css'
import ThemeButton from "../reusable/ThemeButton";
import { useNavigate } from 'react-router-dom';

// import rectangle1 from "../../assets/rectangle1.png"
// import rectangle2 from "../../assets/rectangle2.png"
// import rectangle3 from "../../assets/rectangle3.png"
// import rectangle4 from "../../assets/rectangle4.png"
// import rectangle5 from "../../assets/rectangle5.png"
// import rectangle6 from "../../assets/rectangle6.png"
// import rectangle7 from "../../assets/rectangle7.png"




const Process = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <div className="container-fluid" id='container-fluid1'>
      <div className="row">
        <div className="col-12 text-center mt-3">
          <img className="w-100" src={Heading} alt="" />
        </div>

        {/* <div class="row text center">
    <div class="col-lg-3 col-sm-6 col-md-6 text-center box" id="box1">
      <img class="mt-2" src={rectangle1} alt="" height="85" className='' />
      <h1 class="text-white mt-3">1st</h1>
      <p class="text-white mt-5">Once your book is error-free,<br/> we finalize a book cover.</p>
    </div>
    <div class="col-lg-3 col-sm-6 col-md-6 text-center box" id="box2">
      <img class="mt-2" src={rectangle2} alt="" height="85" />
      <h1 class="text-white mt-3">2nd</h1>
      <p class="text-white mt-5">We assign a dedicated publishing <br/> consultant to you.</p>
    </div>
    <div class="col-lg-3 col-sm-6 col-md-6 text-center box" id="box2">
      <img class="mt-2" src={rectangle3} alt="" height="85" />
      <h1 class="text-white mt-3">3rd</h1>
      <p class="text-white mt-5">You  can choose our Amazon optimization service to improve your sales.</p>
    </div>
    <div class="col-lg-3 col-sm-6 col-md-6 text-center box" id="box2">
      <img class="mt-2" src={rectangle4} alt="" height="85" />
      <h1 class="text-white mt-3">4th</h1>
      <p class="text-white mt-5">The publishing consultant teams up with an editor to review your manuscript and ensure it meets the KDP.</p>
    </div>
    <div class="col-lg-3 col-sm-6 col-md-6 text-center box" id="box2">
      <img class="mt-2" src={rectangle5} alt="" height="85" />
      <h1 class="text-white mt-3">5th</h1>
      <p class="text-white mt-5">You can also avail our book marketing and promotion services to get the word out there.</p>
    </div>
    <div class="col-lg-3 col-sm-6 col-md-6 text-center box" id="box2">
      <img class="mt-2" src={rectangle6} alt="" height="85" />
      <h1 class="text-white mt-3">6th</h1>
      <p class="text-white mt-5">If your manuscript is ready to go, we take your book forward to publication. If it isn't error-free, we format and edit it.</p>
    </div>
       

     </div> */}

        {/* <div className="row">
          <div className="col-12 text-center">
          <img className="mt-2" src={rectangle7} alt="" height={85}/>
<h1 className='text-white mt-3'>7th</h1>
<p className='text-white mt-5'>Your book is then forwarded for publishing <br/> and you can enjoy your author status and royalties!</p>

          </div>
        </div> */}

        <div className="col-12 text-center mt-3" id='forlg'>
          <img className="w-75" src={ProceesImg} alt="" />
        </div>
      </div>
      {/* // small screen div  */}
      <div className="row pt-5" id='formob'>
        <div className="col-md-4 col-sm-6 col-12 p-2 forborder">
          <div className="d-flex">
            <img src={R1} id='r-icon' className="p-4" alt="..." />
            <p className="card-para py-2 my-3 align-self-center">We assign a dedicated publishing consultant to you.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 p-2 forborder">
          <div className="d-flex">
            <img src={R2} id='r-icon' className="p-4" alt="..." />
            <p className="card-para py-2 my-3 align-self-center">The publishing consultant teams up with an editor to review your manuscript and ensure it meets the KDP.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 p-2 forborder">
          <div className="d-flex">
            <img src={R3} id='r-icon' className="p-4" alt="..." />
            <p className="card-para py-2 my-3 align-self-center">If your manuscript is ready to go, we take your book forward to publication. If it isn't error-free, we format and edit it.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 p-2 forborder">
          <div className="d-flex">
            <img src={R4} id='r-icon' className="p-4" alt="..." />
            <p className="card-para py-2 my-3 align-self-center">Once your book is error-free, we finalize a book cover.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 p-2 forborder">
          <div className="d-flex">
            <img src={R5} id='r-icon' className="p-4" alt="..." />
            <p className="card-para py-2 my-3 align-self-center">You can choose our Amazon optimization service to improve your sales..</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 p-2 forborder">
          <div className="d-flex">
            <img src={R6} id='r-icon' className="p-4" alt="..." />
            <p className="card-para py-2 my-3 align-self-center">You can also avail our book marketing and promotion services to get the word out there.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 p-2 forborder">
          <div className="d-flex">
            <img src={R7} id='r-icon' className="p-4" alt="..." />
            <p className="card-para py-2 my-3 align-self-center">Your book is then forwarded for publishing and you can enjoy your author status and royalties!</p>
          </div>
        </div>
       
      </div>

      <div className="row mt-5 pb-4">
        <div className="d-flex justify-content-center gap-5 mx-lg-4" id='btnrow'>
        <button className="comp3btn text-nowrap mt-4" onClick={handleClick}>Get A Free Consultation</button>

         

        </div>
      </div>
    </div>
  )
}

export default Process
