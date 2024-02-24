import React from 'react'
import './Benefits.css'

const Benefits = ({ benefits }) => {
  return (
    <div className="benefits">
      {benefits.benefits.map((benefit) => (
        <div className="benefit" key={benefit.title}>
          <img src={benefit.icon} alt="icon" />
          <div>
            <p>{benefit.title}</p>
            <p>{benefit.sub_title}</p>
          </div>
        </div>
      ))}
      <p className="benefits-title">{benefits.title}</p>
    </div>
  )
}

export default Benefits
