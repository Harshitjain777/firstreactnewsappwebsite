import React from 'react'
import loader from './spinning-loading.gif'

const Spinner=()=> {
 
    return (
      <div className='text-center'>
        <img src={loader}  alt="loading"/>
      </div>
    )
  }
export default Spinner;
