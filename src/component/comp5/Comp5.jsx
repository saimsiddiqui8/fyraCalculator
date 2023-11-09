import React , { useState } from 'react'
import "./comp5.css";
import img1 from "../../assets/comp5img1.png";
import img2 from "../../assets/comp5img2.png";
import img3 from "../../assets/comp5img3.png";



function Comp5() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    if (tabId === activeTab) {
      return;
    }
    setActiveTab(tabId);
  };

  return (
    <section className='comp5-bg py-5'>
      <div className="container overflow-hidden">
      <div className="row">
      <div className="tabs mt-4">
        <button
        id='linkbtn1'
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
          style={{ backgroundColor: activeTab === 'tab1' ? '#FF9F20' : '' }}
        >
          Print Book Distribution Partners
        </button>
        <button
        id='linkbtn2'
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
          style={{ backgroundColor: activeTab === 'tab2' ? '#FF9F20' : '' }}
        >
          EBook Distribution Partners
        </button>
      </div>

      <div className="tab-content">
        <div style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}>
        <div className="container overflow-hidden content1bg">
  <div className="row d-flex justify-content-center">
    <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center pt-4">
      <img className="img1 mb-4" src={img1} alt="" />
      <p className="comp5-h text-center text-md-start text-lg-start">United States & Canada</p>
      <p className="comp5-para text-center text-md-start text-lg-start">
        Via Ingram Book Group, IngramSpark titles are automatically made
        available to tens of thousands of:
      </p>
      <ul className="comp5-ul align-self-start">
        <li>Retailers</li>
        <li>Libraries</li>
        <li>Schools</li>
        <li>E-commerce companies</li>
        <li>Amazon</li>
        <li>Barnes & Noble</li>
        <li>independent bookstores</li>
        <li>Walmart.com</li>
        <li>Target.com</li>
        <li>Chapters / Indigo (Canada)</li>
      </ul>
      <p className="comp5-ul text-center text-md-start text-lg-start">
        and other well-known book retailers and wholesalers across North
        America.
      </p>
    </div>
    <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center pt-4">
      <img className="img2 mb-4" src={img2} alt="" />
      <p className="comp5-h text-center text-md-start text-lg-start">United Kingdom & Europe</p>
      <ul className="comp5-ul align-self-start">
        <li>Adlibris</li>
        <li>Agapea</li>
        <li>Amazon.co.uk</li>
        <li>Aphrohead</li>
        <li>Blackwell</li>
        <li> Books Express</li>
        <li>Coutts Information Services Ltd</li>
        <li>Designarta Books</li>
        <li>Eden Interactive Ltd</li>
        <li>Foyles </li>
        <li>Gardners </li>
        <li>Trust Media Distribution (formerly STL) </li>
        <li> Mallory International</li>
        <li>Paperback Shop Ltd</li>
        <li>Superbookdeals</li>
        <li>The Book Community ltd</li>
        <li>waterstones</li>
        <li>waterstones</li>
        <li>wrap distribution</li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center pt-4">
      <img className="img3 mb-4" src={img3} alt="" />
      <p className="comp5-h text-center text-md-start text-lg-start">Australia & <br className='banner-br' /> New Zealand</p>
      <ul className="comp5-ul align-self-start ms-lg-5">
        <li>Amazon AU</li>
        <li> Booktopia</li>
        <li>Fishpond</li>
        <li>The Nile</li>
        <li>James Bennett</li>
        <li>als</li>
        <li>peter pal</li>
      </ul>
    </div>
  </div>
  </div> 
        </div>
        <div style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}>
        <div className="container overflow-hidden content1bg">
          <p className='link2-para mt-5'>Self-publishing your ebook with IngramSpark gives you access to the major players in global ebook distribution across retailers, libraries, apps, subscription services, and more.</p>
  <div className="row d-flex justify-content-center">
    <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center pt-4">
      <ul className="comp5-ul align-self-start ms-lg-5">
        <li>Ainosco </li>
        <li>Amazon*</li>
        <li>Apple**</li>
        <li>Barnes & Noble Nook</li>
        <li>Bibliotheca</li>
        <li>BibliU</li>
        <li>Bolinda</li>
        <li>Booktopia</li>
        <li>Chegg</li>
        <li> De Marque</li>
        <li>eBooks.com</li>
        <li>EBSCO</li>
        <li>fable</li>
        <li>Findaway</li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center pt-4">
      <ul className="comp5-ul align-self-start ms-lg-5">
        <li>Follett/B&T</li>
        <li> Gardners</li>
        <li>Glose </li>
        <li>hoopla</li>
        <li>Hummingbird</li>
        <li> iGroup</li>
        <li>ITSI</li>
        <li>kobo plus</li>
        <li>Kortex</li>
        <li>Legible</li>
        <li>Libreka  </li>
        <li> Libri Gmbh</li>
        <li>Libro.fm</li>
        <li>mackin</li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center pt-4">
      <ul className="comp5-ul align-self-start ms-lg-5">
        <li>odilo</li>
        <li> overdrive</li>
        <li>perlego</li>
        <li>perusall</li>
        <li>proquest</li>
        <li>redshelf</li>
        <li>scribd</li>
        <li>snapplify</li>
        <li>storytel</li>
        <li>takealot</li>
        <li>vitalsource</li>
        <li>wheelers</li>
        <li>wook</li>
        <li>youscribe</li>
      </ul>
    </div>
  </div>
  </div> 
        </div>
      </div>
      </div>
      
    </div>
   
    </section>
    
  );
}

export default Comp5;

