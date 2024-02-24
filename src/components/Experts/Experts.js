import React from 'react'
import './Experts.css'

const Experts = ({ experts }) => {
  console.log(experts)
  return (
    <div className="experts">
      <p>{experts.title}</p>
      <div>
        {experts.creator_list.map((expert) => (
          <div className="expert">
            <img
              src={expert.avatar}
              alt={expert.name}
              className="expert_image"
            />
            <p>{expert.name}</p>
            <p>{expert.profession}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experts
