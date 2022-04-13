import React,{useContext, useEffect, useState} from 'react'
import MainContext from './MainContext'
import {GrLink,GrDownload,GrClose} from 'react-icons/gr'
import {Link} from 'react-router-dom'
function Download() {
    const {selectedBrand,setSelectedBrand,brands} = useContext(MainContext)
    const [downloadUrl,setDowloadUrl] = useState()
    const [cssMethod,setCssMethod] = useState('css')
    const getLink = ()=>{
        prompt("Here's the URL to share",`http://localhost:3000/collection/${selectedBrand.join(',')}`)
    }

    useEffect(()=>{
        
        if(selectedBrand.length > 0){
            let output = '';
            switch(cssMethod){
                
                case 'css':
                    output += ':root{\n'
                    selectedBrand.map(slug=>{
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color,key)=>{
                            output += `--${slug}-${key}: #${color};\n`
                        })
                    })
                    output+='}'
                    break

                case 'scss':
                    selectedBrand.map(slug=>{
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color,key)=>{
                            output += `\$${slug}-${key}: #${color};\n`
                        })
                    })
                    break

                case 'less':
                    selectedBrand.map(slug=>{
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color,key)=>{
                            output += `\@${slug}-${key}: #${color};\n`
                        })
                    })
                    break
                   
            }
            const blob = new Blob([output])
            const url = (URL.createObjectURL(blob))
            setDowloadUrl(url)
            return ()=>{
                URL.revokeObjectURL(url)
                setDowloadUrl('')
            }
        }
    },[selectedBrand,cssMethod])
  return (
    <div className='download'>
        <div className='actions'>
                <select onChange={(e)=>setCssMethod(e.target.value)}>
                <option value="css">css</option>
                <option value="scss">scss</option>
                <option value="less">less</option>
            </select>
            <a download={`brands.${cssMethod}`} href={downloadUrl}>
                <GrDownload/>
            </a>
            
            <Link to={`/collection/${selectedBrand.join(',')}`}>
                <GrLink/>
            </Link>
        </div>
        <div className='selected' onClick={()=>setSelectedBrand([])}>
            <GrClose/>
            {/* <GrDownload/> */}
            {selectedBrand.length} brands collected
            
        </div>
        
    </div>
  )
}

export default Download