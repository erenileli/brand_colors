import React from 'react'
import ContentLoader  from 'react-content-loader'
function Loader() {
  return (
    <ContentLoader 
    speed={2}
    width={400}
    height={103}
    viewBox="0 0 400 103"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="85" y="93" rx="0" ry="0" width="3" height="0" /> 
    <rect x="88" y="93" rx="0" ry="0" width="2" height="0" /> 
    <rect x="25" y="4" rx="0" ry="0" width="147" height="23" /> 
    <rect x="24" y="36" rx="0" ry="0" width="54" height="41" /> 
    <rect x="254" y="36" rx="0" ry="0" width="54" height="41" /> 
    <rect x="82" y="37" rx="0" ry="0" width="54" height="41" /> 
    <rect x="139" y="37" rx="0" ry="0" width="54" height="41" /> 
    <rect x="196" y="37" rx="0" ry="0" width="54" height="41" />
  </ContentLoader>
  )
}

export default Loader