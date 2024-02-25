import React, { useState } from 'react'
import './FAQ.css'

const FAQ = ({ qas }) => {
  const [openArr, setOpenArr] = useState(
    new Array(qas.faq_list.length).fill(false)
  )
  const handleClick = (index) => {
    let newArr = [...openArr]
    newArr[index] = !newArr[index]
    setOpenArr(newArr)
  }
  return (
    <div className="faq">
      <p>FAQs</p>
      <div>
        {qas.faq_list.map((qa, i) => (
          <div key={qa.question}>
            <div className="qa" onClick={() => handleClick(i)}>
              <p>{qa.question}</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#FFCC11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className={`answer ${openArr[i] ? '' : 'hidden'}`}>
              {qa.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
