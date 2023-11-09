import React from 'react'
import './style.css'
import Img1 from '../../assets/iconimg1.png'
import Img2 from '../../assets/iconimg2.png'
import Img3 from '../../assets/iconimg3.png'
import Img4 from '../../assets/iconimg4.png'
import Img5 from '../../assets/iconimg5.png'
import Img6 from '../../assets/iconimg6.png'


function Icon() {
 
  return (
   <section className='icon-bg'>
     <div className="container py-3 overflow-hidden">
     <h2 className='icon-heading mt-lg-3'>Our Proud Recognitions</h2>
        <div className="row d-flex justify-content-center mt-lg-4">
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center align-items-center my-2">
            <img className='icon-img' src={Img1} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center align-items-center my-2">
            <img className='icon-img' src={Img2} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center align-items-center my-2">
            <img className='icon-img' src={Img3} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center align-items-center my-2">
            <img className='icon-img' src={Img4} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center align-items-center my-2">
            <img className='icon-img' src={Img5} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center align-items-center my-2">
            <img className='icon-img' src={Img6} alt="" />
            </div>
        </div>
    </div>
   </section>
  )
}

export default Icon
