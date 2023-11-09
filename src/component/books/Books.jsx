import React, { useState } from 'react';
import "./books.css";
import book1 from '../../assets/books1.png'
import book2 from '../../assets/books2.png'
import book3 from '../../assets/books3.png'
import book4 from '../../assets/books4.png'
import book5 from '../../assets/books5.png'
import book6 from '../../assets/books6.png'
import book7 from '../../assets/books7.png'
import book8 from '../../assets/books8.png'
import book9 from '../../assets/books9.png'
import book10 from '../../assets/books10.png'
import book11 from '../../assets/books11.png'
import book12 from '../../assets/books12.png'
import book13 from '../../assets/books13.png'
import book14 from '../../assets/books14.png'
import book15 from '../../assets/books15.png'
import book16 from '../../assets/books16.png'
import book17 from '../../assets/books17.png'
import book18 from '../../assets/books18.png'
import book19 from '../../assets/books19.png'
import book20 from '../../assets/books20.png'
import book21 from '../../assets/books21.png'
import book22 from '../../assets/books22.png'
import book23 from '../../assets/books23.png'
import book24 from '../../assets/books24.png'
import book25 from '../../assets/books25.png'
import book26 from '../../assets/books26.png'
import book27 from '../../assets/books27.png'
import book28 from '../../assets/books28.png'
import book29 from '../../assets/books29.png'
import book30 from '../../assets/books30.png'
import book31 from '../../assets/books31.png'
import book32 from '../../assets/books32.png'
import book33 from '../../assets/books33.png'
import book34 from '../../assets/books34.png'
import book35 from '../../assets/books35.png'
import book36 from '../../assets/books36.png'

const bookImages = {
  tab1: [book1, book2, book3, book4, book5, book6],
  tab2: [book7, book8, book9, book10, book11, book12],
  tab3: [book13, book14, book15, book16, book17, book18],
  tab4: [book19, book20, book21, book22, book23, book24],
  tab5: [book25, book26, book27, book28, book29, book30],
  tab6: [book31, book32, book33, book34, book35, book36],
};

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    if (tabId === activeTab) {
      return;
    }
    setActiveTab(tabId);
  };

  return (
    <section className='links'>
      <div className='container overflow-hidden'>
        <h2 className='books-h2 mt-5'>
          We Have Helped Thousands Of <br className='banner-br' /> Writers Get Their Work Published
        </h2>
        <p className='books-para'>
          Our diversified talent pool with multiple unique skillsets has enabled us to specialize in various genres and cater to <br className='banner-br' />
          the <span> ghostwriting </span> needs of clients from varying industries and professional spheres.
        </p>
        <div className='d-flex justify-content-center gap-3 flex-wrap py-3'>
          {['FICTION', 'NON-FICTION', 'BIOGRAPHY', 'INFORMATIVE', 'AUTOBIOGRAPHY', 'MEMOIR'].map((tab, index) => (
            <button id='booksbtn1'
              key={`tab${index + 1}`}
              className={activeTab === `tab${index + 1}` ? 'active' : ''}
              onClick={() => handleTabClick(`tab${index + 1}`)}
              style={{ backgroundColor: activeTab === `tab${index + 1}` ? '#FF9F20' : '' }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className='container overflow-hidden'>
          <div className='row'>
            {bookImages[activeTab].map((image, index) => (
              <div key={`book-${index}`} className='col-6 col-sm-6 col-md-4 col-lg-2 text-center my-2'>
                <img className='books' src={image} alt={`Book ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabComponent;
