import React, { useContext, useState } from 'react'
import Search from './Search'
import MainContext from './MainContext';
import Brand from './Brand';
import LazyLoad from 'react-lazyload';
import Download from './Download';
import Loader from './Loader';
import {List,AutoSizer} from 'react-virtualized';

function Content() {
 const {brands,selectedBrand} = useContext(MainContext);
 const rowRenderer = ({key,index,style})=>{
  return(
    <Brand style={style} brand={brands[index]} key={key}/>
  )
 }
  return ( 
    <main className='content'>
      <header className='header'>
        <Search/>
        {selectedBrand.length>0 && <Download/>}
      </header>
      <section className='brands'>
        <List
            width={1200}
            height={800}
            rowCount={brands.length}
            rowHeight={103}
            rowRenderer={rowRenderer}
        />
      </section>
    </main>
  )
}

export default Content