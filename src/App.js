// import logo from './logo.svg';
import './App.css';
import React from 'react'

import Banner from './component/banner/Banner';
import Books from './component/books/Books';
import Comp1 from './component/comp1/Comp1';
import Comp2 from './component/comp2/Comp2';
import Comp3second from './component/comp3second/Comp3second';
import Comp3 from './component/comp3/Comp3';
import Comp4 from './component/comp4/Comp4';
import Comp5 from './component/comp5/Comp5';
import Comp6 from './component/comp6/Comp6';
import Comp7 from './component/comp7/Comp7';
import Comp8 from './component/Comp8/Comp8';
import Footers from './component/footers/Footers';
import Icon from './component/icons/Icon';
import Comp3third from './component/comp3third/Comp3third';
import Banner2 from './component/banner2/Banner2';
import Process from './component/Process/Process';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Form from './component/Form/Form';
import Thankyou from './component/Thankyou/Thankyou';


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/thankyou" element={<Thankyou />} />


        {/* <Banner/> */}
        {/* <Icon />
      <Banner2 />
      <Comp1 />
      <Comp2 />
      <Books />
      <Process />
      <Comp8 />
      <Comp5 />
      <Comp6 />
      <Comp3 />
      <Comp3third />
      <Comp3second />
      <Comp4 />
      <Comp7 />
      <Footers /> */}

      </Routes>
    </>
  );
}

export default App;
