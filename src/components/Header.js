import React, {useState, useEffect} from 'react'

import './Header.css'

export const Header = () => {
const [toggleMenu, setToggleMenu] = useState(false)
const toggleNav = () => {
  setToggleMenu(!toggleMenu)
  
}

  return (
    <header>
        <ul className='list'>
          <li className='items'>Avaleht</li>
          <li className='items'>Teenused</li>
          <li className='items'>Kontakt</li>
          </ul>
          <button onClick={toggleNav} className="btn">BTN</button>
    </header>
  )
  
}
