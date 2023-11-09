import React from 'react'
import logo from "../../assets/logo.png"
import ThemeButton from '../reusable/ThemeButton'
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/")
    }
    return (
        <div className="bg-dark" style={{paddingBottom: "20rem"}}>
            
        <div className='container'>
            <div className="text-center pt-5">
            <img src={logo} alt="" style={{width: "20%"}}/>
            </div>
            <div className='mt-5 pt-4'>
                <h1 className="text-center text-white mt-4" style={{ fontSize: "6rem", fontWeight: 1000 , fontFamily:'span' }}>Thank You</h1>
                <p className='text-center' style={{fontFamily:'span',fontSize:'30px',color:'#F99F20'}}>we will contact you shortly</p>
                <div className="text-center">
                <ThemeButton  name="Back to home" click={handleClick}/>

                </div>
        </div>
    </div >
        </div>
  )
}

export default Thankyou
