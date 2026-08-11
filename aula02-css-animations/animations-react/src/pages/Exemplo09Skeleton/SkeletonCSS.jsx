import React from 'react'

import "./skeleton.css"

const SkeletonCSS = ({children}) => {
  return (
    <div className='skeleton'>{children}</div>
  )
}

export default SkeletonCSS