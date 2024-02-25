import React from 'react'
import './Header.css'

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <div className="premium-summary">
        <div>
          <div>10,000+</div>
          <div>SERIES</div>
        </div>
        <div>
          <div>NO</div>
          <div>ADS</div>
        </div>
        <div>
          <div>UNLIMITED</div>
          <div>CONTENT</div>
        </div>
      </div>
      <h2>{title}</h2>
    </div>
  )
}

export default Header
