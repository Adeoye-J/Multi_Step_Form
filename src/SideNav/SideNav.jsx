import React from 'react'
import "./SideNav.css"

const SideNav = () => {

    const nav_details = [
        {
            id: 1,
            info: "YOUR INFO"
        },
        {
            id: 2,
            info: "SELECT PLAN"
        },
        {
            id: 3,
            info: "ADD-ONS"
        },
        {
            id: 4,
            info: "SUMMARY"
        },
    ]

    return (
        <div className='side-nav'>
            <div className="nav-container">
            {
                nav_details.map((detail) => (
                    <div className="nav-list" key={detail.id}>
                        <div className="step">
                            {detail.id}
                        </div>
                        <div className="step-info">
                            <h4>STEP {detail.id}</h4>
                            <h3>{detail.info}</h3>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default SideNav
