import { click } from '@testing-library/user-event/dist/click'
import React, { useEffect } from 'react'

const Nosotros = () => {

useEffect(()=>{

const clickear = () => {
  console.log(click)
}

  window.addEventListener("click",clickear)


return () => {
  window.removeEventListener("click",clickear)
}

},[])

 


  return (
    <div className='container'>
        <h1 className='main/tittle'>Nosotros</h1>
        
    </div>
  )
}

export default Nosotros