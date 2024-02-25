import React, { useState } from 'react'
import './Reviews.css'

const Reviews = ({ reviews }) => {
  const [index, setIndex] = useState(0)
  return (
    <div className="reviews">
      <p>{reviews.title}</p>
      <div>
        {reviews.user_list.map((user, i) => (
          <div
            className={`user ${i === index ? '' : 'hidden'}`}
            key={user.name}
          >
            <img src={user.avatar} alt={user.name} />
            <div>
              <p>{user.name}</p>
              <p>{user.profession}</p>
            </div>
            <p>{user.review}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        {reviews.user_list.map((user, i) => (
          <button
            key={user.name}
            onClick={() => setIndex(i)}
            className={`${index === i ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Reviews
