import React from 'react'
import "./Header.css"

function Header({logo_src}) {
  return (
    <div className='header_container'>
      <img src={logo_src} alt='bla bla' width="150"></img>
      <div>
         <h2>Рожки да Ножки</h2>
         <span>Председатель Фунт всегда сидел</span>
      </div>
    </div>
  )
}
export default Header