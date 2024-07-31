import React, {useContext, useState} from 'react'
import { FormContext } from '../../Context/FormContext'
import "./Page3.css"
import { Link } from 'react-router-dom'

const Page3 = () => {

    const {add_ons, duration, additional, setAdditional} = useContext(FormContext)
    const [navigate, setNavigate] = useState(false)
    

    const handleAddOn = (addOn) => {
        additional.includes(addOn.id) ? 
            setAdditional(additional.filter(id => id !== addOn.id)) 
            : setAdditional([...additional, addOn.id])
    }
        
    const handleSelectionNo = () => {
        additional.length !== 0 ? setNavigate(true) : setNavigate(false)
    }

    return (
        <div className='page3'>
            <h1>Pick add-ons</h1>
            <p>Add-ons helps enhancing our gaming experience</p>

            <div className="add-ons">
                {
                    add_ons.map((add_on) => (
                        <div 
                            className="add-on" 
                            key={add_on.id} 
                            onClick={() => handleAddOn(add_on)}
                            style={{
                                backgroundColor: additional.includes(add_on.id) && "hsl(231, 100%, 95%)"
                            }}
                        >
                            <input 
                                type="checkbox" 
                                onChange={() => handleAddOn(add_on)}
                                checked={additional.includes(add_on.id)}
                            />
                            <div className="content">
                                <div className="details">
                                    <h3>{add_on.title}</h3>
                                    <p>{add_on.text}</p>
                                </div>
                                {duration == "monthly" ? <p>+${add_on.monthly}/mo</p> : <p>+${add_on.yearly}/yr</p>}   
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="navigation">
                <Link to="/page2"><button className='return'>Go Back</button></Link>
                <Link to={navigate && "/page4"}><button onClick={handleSelectionNo} className='next'>Next Step</button></Link>
            </div>
        </div>
    )
}

export default Page3
