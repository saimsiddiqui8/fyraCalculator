import React from 'react'
import './style.css'
import OwlCarouselSlider from '../CarouselSlider/OwlCarouselSlider'

const Comp4 = () => {
    return (
        <div className='container-comp4 overflow-hidden'>
            <div className="row">
                <h1 className='text-center h1-text mt-5 pt-5'>They love to talk about our <br className='banner-br' /> image</h1>
                <p className='text-center text-white mt-5 para-comp4'>The feedback we get from our customers tells us about our cooperation better than we do and makes <br/> us move forward.</p>
            </div>
   <div className="mt-5">
            <OwlCarouselSlider/>
            </div>
           

        </div>
    )
}

export default Comp4
