import React, { useContext, useEffect } from 'react'
import {getContrastYIQ} from '../helpers';
import MainContext from './MainContext';
import Clipboard from 'react-clipboard.js';

function Brand({brand,style}) {

  const {selectedBrand,setSelectedBrand,setCopied}= useContext(MainContext);
  const toggleSelected = ()=>{
    if(selectedBrand.includes(brand.slug)){
      setSelectedBrand(selectedBrand.filter(slug => slug !== brand.slug))
    }else{
      setSelectedBrand([...selectedBrand,brand.slug]);
    }
  }
  const setColor = (color)=>{
    setCopied(color);
  }
useEffect(()=>{
  console.log(selectedBrand);
},[selectedBrand]);
  return (
    <div style={style} className={`brand ${selectedBrand.includes(brand.slug) ? 'selected' : ''}` }> 
        <h5 onClick={toggleSelected}>
            {brand.title}
        </h5>
        <div className='brand-colors'>
            {brand.colors.map(color => (
              <Clipboard component="span" data-clipboard-text={color} onSuccess={()=>setColor(color)} style={{'--bgColor' : `#${color}`, '--textColor' : `${getContrastYIQ(color)}`}}>
              {color}
              </Clipboard>
            ))}
        </div>
    </div>
  )
}

export default Brand