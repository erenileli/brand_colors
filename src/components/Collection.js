import React,{useContext, useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import MainContext from './MainContext';
import Brand from './Brand'
import Download from './Download'
import LazyLoad from 'react-lazyload'
import {GrLinkPrevious} from 'react-icons/gr'
import Loader from './Loader';
function Collection() {
    const slugs = useParams()
    const {brands,selectedBrand,setSelectedBrand} = useContext(MainContext)
    const resetBrands = ()=>{
        setSelectedBrand([]);
    }
    useEffect(()=>{
        setSelectedBrand(slugs.slug.split(','));
    },[])
  return (
    <main className='content'>
    <header className='header'>
        <Link  to="/">
            <a onClick={resetBrands}>
                <div className='backBtn'>
                    <GrLinkPrevious/> All brands
                </div>
            
            </a>
        </Link>
      {selectedBrand.length>0 && <Download/>}
    </header>
    <section className='brands'>
      {selectedBrand.map(slug =>{
          let brand = brands.find(brand => brand.slug === slug);
        return (
        <LazyLoad key={brand.slug} once={true} overflow={true} placeholder={<Loader/>}>
          <Brand brand={brand}/>
        </LazyLoad>
        )
      })}
    
    </section>
    </main>
  )
}

export default Collection