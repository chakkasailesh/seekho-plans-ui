import React from 'react'
import './Header.css'

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <div className="premium-summary">
        <div>
          <p>
            10,000+
            <br />
            <span>SERIES</span>
          </p>
        </div>
        <div>
          NO
          <br />
          ADS
        </div>
        <div>
          UNLIMITED
          <br />
          CONTENT
        </div>
      </div>
      <h2>{title}</h2>
    </div>
  )
}

export default Header
