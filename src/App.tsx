import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import Publications from "./Pages/Publications";
import Workshops from "./Pages/Workshops";
import Professional from "./Pages/Professional";
import DataSet from "./Pages/DataSet";
import MyWorks from "./Pages/Myworks";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Navbar from "./Route/Develop";
import DevelopPublicatons from "./Pages/DevelopPublication";



const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<DevelopPublicatons />} />
          <Route path="/home" element={<Home />} />
          <Route path="/publication" element={<Publications />} />
          <Route path="/workshop" element={<Workshops />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/dataset" element={<DataSet />} />
          <Route path="/myworks" element={<MyWorks />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
};

export default App;
