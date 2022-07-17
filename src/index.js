import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import './index.css';
import './style/main.css';


import Home from './elements/Home/Home';
import Docs from './elements/Docs/Docs';
import FeaturePage1 from './elements/Home/Features/page1';
import FeaturePage2 from './elements/Home/Features/page2';
import FeaturePage3 from './elements/Home/Features/page3';
import FeaturePage4 from './elements/Home/Features/page4';
import FeaturePage5 from './elements/Home/Features/page5';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>

      <Route exact path={"/"} element={<Home/>} >
        
        <Route path={"/home"} element={<FeaturePage1/>} />
        <Route path={"/feature"} element={<FeaturePage1/>} />
        <Route path="/home/feature1" element={<FeaturePage1/>} />
        <Route path="/home/feature2" element={<FeaturePage2/>} />
        <Route path="/home/feature3" element={<FeaturePage3/>} />
        <Route path="/home/feature4" element={<FeaturePage4/>} />
        <Route path="/home/feature5" element={<FeaturePage5/>} />
        <Route path="" element={<FeaturePage1/>} />
      </Route>
      
      <Route path="/docs" element={<Docs/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();