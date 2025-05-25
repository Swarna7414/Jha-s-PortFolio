import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Publications from "./Pages/Publications";
import Workshops from "./Pages/Workshops";
import Professional from "./Pages/Professional";
import DataSet from "./Pages/DataSet";
import MyWorks from "./Pages/Myworks";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Develop from "./Route/Develop";

const App: React.FC = () => {
  return (
    <>
      <Develop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/publication" element={<Publications />} />
        <Route path="/workshop" element={<Workshops />} />
        <Route path="/professional" element={<Professional/>}/>
        <Route path="/dataset" element={<DataSet/>}/>
        <Route path="/myworks" element={<MyWorks/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
};

export default App;