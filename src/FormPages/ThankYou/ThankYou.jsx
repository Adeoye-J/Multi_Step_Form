import React from 'react'
import thankyou from "../../assets/images/icon-thank-you.svg"
import "./ThankYou.css"

const ThankYou = () => {
  return (
    <div className='thank-you'>
        <div className="thankyou-container">
            <div className="image-container">
                <img src={thankyou} alt="Checkmark" />
            </div>
            <div className="thank-you-content">
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at bankolejeremiahadeoye@gmail.com.</p>
            </div>
        </div>
    </div>
  )
}

export default ThankYou
