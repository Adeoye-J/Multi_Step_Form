import React, {useContext} from 'react'
import { FormContext } from '../../Context/FormContext'
import {Link} from "react-router-dom"
import "./Page4.css"

const Page4 = () => {

  const {duration, plans, selectedSubscriptionId, add_ons, additional} = useContext(FormContext)

  const add_on_array = additional.map(id => 
    (duration == "monthly" ? add_ons[id-1].monthly : add_ons[id-1].yearly)
  )

  // const arr = [23, 34, 77, 99, 324];
  let add_on_sum = 0;
  add_on_array.forEach((val) => add_on_sum += val);
  console.log(add_on_sum)


  const plan_amount = duration == "monthly" ? plans[selectedSubscriptionId-1].monthly : plans[selectedSubscriptionId-1].yearly
  const total_sum = add_on_sum + plan_amount

  return (
    <div className='page4'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

        <div className="summary-container">
          <div className="sub-duration">
            <div className="plan-duration">
              <h3>{plans[selectedSubscriptionId-1].text} ({duration=="monthly" ? "Monthly" : "Yearly"})</h3>
              <span> <Link to="/page2">Change</Link> </span>
            </div>
            <div className="plan-amount">
              {duration == "monthly" && <p>${plans[selectedSubscriptionId-1].monthly}/mo</p>}
              {duration == "yearly" && <p>${plans[selectedSubscriptionId-1].yearly}/yr</p>}
            </div>
          </div>
          <hr />
          <div className="add-ons-container">
            {additional.map(id => (
              <div className="add-on-container" key={id}>
                <h4>{add_ons[id-1].title}</h4>
                <p>+${duration == "monthly" ? add_ons[id-1].monthly : add_ons[id-1].yearly}/{duration=="monthly" ? "mo" : "yr"}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="total-container">
          <h4>Total (per {duration == "monthly" ? "month":"year"})</h4>
          <p>${total_sum}/{duration=="monthly" ? "mo" : "yr"}</p>
        </div>
        <div className="navigation">
          <Link to="/page3"><button className='return'>Go Back</button></Link>
          <Link to="/thankyou"><button className='next'>Confirm</button></Link>
        </div>
    </div>
  )
}

export default Page4
