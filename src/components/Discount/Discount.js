import React, { useState } from 'react'
import './Discount.css'

const Discount = ({ coupons }) => {
  const [isApplied, setIsApplied] = useState(true)
  return (
    <div className="coupons">
      <p className="coupons-header">Discount</p>
      {coupons.map((coupon) => (
        <div key={coupon.id} className="coupon">
          <div className="coupon-top">
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66667 0C1.95942 0 1.28115 0.267573 0.781048 0.743856C0.280951 1.22014 0 1.86612 0 2.53968V6.34921C0.707244 6.34921 1.38552 6.61678 1.88562 7.09306C2.38572 7.56935 2.66667 8.21532 2.66667 8.88889C2.66667 9.56246 2.38572 10.2084 1.88562 10.6847C1.38552 11.161 0.707244 11.4286 0 11.4286V15.2381C0 15.9117 0.280951 16.5576 0.781048 17.0339C1.28115 17.5102 1.95942 17.7778 2.66667 17.7778H21.3333C22.0406 17.7778 22.7189 17.5102 23.219 17.0339C23.719 16.5576 24 15.9117 24 15.2381V11.4286C23.2928 11.4286 22.6145 11.161 22.1144 10.6847C21.6143 10.2084 21.3333 9.56246 21.3333 8.88889C21.3333 8.21532 21.6143 7.56935 22.1144 7.09306C22.6145 6.61678 23.2928 6.34921 24 6.34921V2.53968C24 1.86612 23.719 1.22014 23.219 0.743856C22.7189 0.267573 22.0406 0 21.3333 0H2.66667Z"
                    fill="url(#paint0_linear_1_91)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_91"
                      x1="-4"
                      y1="0"
                      x2="24"
                      y2="21.3333"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#37ABFF" />
                      <stop offset="0.479167" stopColor="#FF00D6" />
                      <stop offset="1" stopColor="#FFA800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p>{coupon.code}</p>
            </div>
            <p>
              {coupon.coupon_benefit.split(' ')[0] +
                'd ' +
                '₹' +
                coupon.coupon_benefit.split(' ')[1]}
            </p>
          </div>
          <div className="coupon-bottom">
            <p>{isApplied ? 'Coupon Applied' : ''}</p>
            <p
              style={{ color: isApplied ? 'Red' : 'Green', cursor: 'pointer' }}
              onClick={() => setIsApplied((prev) => !prev)}
            >
              {isApplied ? 'Remove' : 'Apply'}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Discount
