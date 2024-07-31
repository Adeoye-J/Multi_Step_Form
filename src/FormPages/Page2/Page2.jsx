import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import "./Page2.css"
import { FormContext } from '../../Context/FormContext'

const Page2 = () => {

    const {plans, duration, setDuration, selectedSubscriptionId, setSelectedSubscriptionId} = useContext(FormContext)

    const handleDuration = () => {
        setDuration(duration == "monthly" ? "yearly" : "monthly")
    }

    const handlePlanSelection = (plan) => {
        setSelectedSubscriptionId(plan.id)
    }

    console.log(duration)

    return (
        <div className='page2'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className="plans">
                {
                    plans.map((plan) => (
                        <div 
                            className="plan" 
                            key={plan.id} 
                            onClick={() => handlePlanSelection(plan)} 
                            style={{
                                backgroundColor: plan.id === selectedSubscriptionId && "hsl(231, 100%, 95%)",
                                border: plan.id === selectedSubscriptionId && "2px solid hsl(213, 96%, 18%)"
                            }}
                        >
                            <div className="icon-container">
                                <img src={plan.icon} alt="arcade_icon" />
                            </div>
                            <div className="plan-content">
                                <h3>{plan.text}</h3>
                                {
                                    duration == "monthly" ? <p>${plan.monthly}/mo</p> : <div><p>${plan.yearly}/yr</p><p className='free'>{plan.free}</p></div>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="duration-container">
                <p style={duration == "monthly" ? {fontWeight: "bold"} : {fontWeight: "100"}}>Monthly</p>
                <label className="switch">
                    <input type="checkbox" checked={duration == "yearly"} onChange={handleDuration} />
                    <span className="slider round"></span>
                </label>
                <p style={duration == "yearly" ? {fontWeight: "bold"} : {fontWeight: "100"}}>Yearly</p>
            </div>
            <div className="navigation">
                <Link to="/page1"><button className='return'>Go Back</button></Link>
                <Link to="/page3"><button className='next'>Next Step</button></Link>
            </div>
        </div>
    )
}

export default Page2