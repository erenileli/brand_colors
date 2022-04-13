import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './components/MainContext';
import brandsData from './brand.json'
import React, { useEffect, useState } from 'react'
import Copied from './components/Copied';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Collection from './components/Collection';
import {forceCheck} from 'react-lazyload'

function App() {
  const brandsArray = [];
  Object.keys(brandsData).map(key=>{
    brandsArray.push(brandsData[key])
  });
  const [brands,setBrands] = useState(brandsArray);
  const [selectedBrand,setSelectedBrand] = useState([]);
  const [copied,setCopied] = useState(false);
  const [search,setSearch] = useState('');
  const data ={
    brands,setSelectedBrand,selectedBrand,setCopied,search,setSearch
  }
  
  useEffect(()=>{
    const setTimeOut = setTimeout(()=>{
         setCopied(false);
      },700)
    
    return ()=>clearTimeout(setTimeOut);
  },[copied])
  useEffect(()=>{
    setBrands(brandsArray.filter(brand=>brand.title.toLowerCase().includes(search.toLowerCase())))
  },[search])
  useEffect(()=>{
    forceCheck()
  },[brands])
  return (
    <>
    <MainContext.Provider value={data}>
      {copied && <Copied color={copied}/>}
      <Sidebar/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/collection/:slug" element={<Collection/>}/>
        
      </Routes>
      </BrowserRouter>
    </MainContext.Provider>
    </>
  );
}

export default App;
