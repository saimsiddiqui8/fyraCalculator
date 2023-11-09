import React from 'react'
import './style.css'
import pub1 from '../../assets/pubicon1.png'
import pub2 from '../../assets/pubicon2.png'
import pub3 from '../../assets/pubicon3.png'
import pub4 from '../../assets/pubicon4.png'
import pub5 from '../../assets/pubicon5.png'
import pub6 from '../../assets/pubicon6.png'
import pub7 from '../../assets/pubicon7.png'
import pub8 from '../../assets/pubicon8.png'
import pub9 from '../../assets/pubicon9.png'
import pub10 from '../../assets/pubicon10.png'


function Comp1() {
  return (
    <section className='pub-bg'>
        <div className="container py-5 overflow-hidden">
        <h2 className='pub-h2 mt-3'> Get Published On Famous Online <br className='banner-br' /> Book Platforms</h2>
        <div className="row d-flex justify-content-center mt-5">
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub1} alt="" />
            </div>
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub2} alt="" />
            </div>
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub3} alt="" />
            </div>
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub4} alt="" />
            </div>
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub5} alt="" />
            </div>
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub6} alt="" />
            </div>
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub7} alt="" />
            </div>
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub8} alt="" />
            </div>
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub9} alt="" />
            </div>
            <div className="m-lg-3 m-md-3 m-sm-3 col-lg-2 col-md-3 col-sm-3 col-6 d-flex justify-content-center align-items-center">
            <img className='pub-img' src={pub10} alt="" />
            </div>
        </div>
    </div>
    </section>
  )
}

export default Comp1
