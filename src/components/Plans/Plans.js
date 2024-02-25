import React, { useState } from 'react'
import './Plans.css'
import Discount from '../Discount/Discount'

const Plans = ({ plans }) => {
  const [selectedPlan, setSelectedPlan] = useState(0)
  const handleSelect = (index) => {
    setSelectedPlan(index)
  }
  return (
    <div className="plans">
      {plans.map((plan, index) => (
        <div
          key={plan.id}
          className={`plan ${index === selectedPlan ? 'selected' : ''}`}
          onClick={() => handleSelect(index)}
        >
          <div className="plan-start">
            <input
              type="radio"
              name="price"
              checked={index === selectedPlan}
              onChange={() => handleSelect(index)}
            />
            <div>
              <div className="price-top">
                <span className="amount">₹{plan.discounted_price}</span>/
                <span className="duration">{plan.duration_text}</span>
              </div>
              <div className="price-bottom">
                <p>₹{plan.discounted_price + 300}</p>
                <p
                  style={{
                    display: plan.hide_discount_percentage ? 'none' : 'flex',
                  }}
                >
                  {parseInt((300 / (plan.discounted_price + 300)) * 100) +
                    '% off'}
                </p>
              </div>
            </div>
          </div>
          <div>
            {plan.plan_type === 'monthly'
              ? '1 Month'
              : plan.plan_type === 'quarterly'
              ? '3 Months'
              : '12 Months'}
          </div>
          {plan.is_special && <div className="special">SPECIAL PRICE</div>}
        </div>
      ))}
      {plans.length > 0 && (
        <Discount coupons={plans[selectedPlan].coupons ?? []} />
      )}
      <div className="subscribe">
        <p>
          <span className="amount">
            ₹{plans[selectedPlan].discounted_price}
          </span>
          /<span className="duration">{plans[selectedPlan].duration_text}</span>
        </p>
        <p style={{ fontWeight: '500' }}>Subscribe karein</p>
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM1 9L14 9V7L1 7L1 9Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}

export default Plans
