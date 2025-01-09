import React from 'react'
import { ogtsLogo } from '../utils'

const GreenBanner = () => {
  return (
    <>
        <div className='bg-green flex p-2 justify-center'>
            <img src={ogtsLogo} alt="OGTS Logo" height="20" width="20" className='mr-4'/>
            <p className='text-light pt-0.5'>Organic Global Textile Standard Zertifiziert</p>
        </div>
    </>
  )
}

export default GreenBanner
