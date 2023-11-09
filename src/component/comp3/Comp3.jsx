import React from "react";
import "./style.css";
import comp3book from "../../assets/comp3book.png";
import { useNavigate } from 'react-router-dom';


function Comp3() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <section className="comp3-bg">
      <div className="container overflow-hidden">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center text-center text-md-start text-lg-start mt-5 mt-lg-0">
            <p className="comp3-h mt-4">Your Story Deserves to be Heard</p>
            <p className="comp3-para">
            Accelerate your book-writing journey with precision, excellence, and  newfound confidence alongside our dedicated team. Comprising seasoned editors and astute book marketers, our team’s mission is simple: to empower you in crafting exceptional books that captivate readers' hearts, all while accommodating your bustling lifestyle. Bid farewell to writing hurdles as we stand by your side, guiding you through the creative process. Together, we'll help you conquer those challenges and bring your book to fruition, because the world deserves to hear your extraordinary story!
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start justify-content-lg-start pb-4">
              <button className="comp3btn text-nowrap mt-4" onClick={handleClick}>Get A Free Consultation</button>
            </div>
          </div>
          <div className="col-lg-5 col-12 text-center pb-4">
            <img className="w-75 mt-5" src={comp3book} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comp3;
