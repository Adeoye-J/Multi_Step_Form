import React from 'react'
import './MainPage.css'
import {Route, Routes} from "react-router-dom"
import SideNav from './SideNav/SideNav'
import Page1 from "./FormPages/Page1/Page1"
import Page2 from "./FormPages/Page2/Page2"
import Page3 from "./FormPages/Page3/Page3"
import Page4 from "./FormPages/Page4/Page4"
import ThankYou from './FormPages/ThankYou/ThankYou'
import { FormProvider } from './Context/FormContext'


const MainPage = () => {

    // const [selectedSubscriptionId, setSelectedSubscriptionId] = useState(null)
    // const [duration, setDuration] = useState("monthly")

    return (
        <div className='main-page'>
            <SideNav />
            <FormProvider>
                <Routes>
                    <Route index element={<Page1 />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/thankyou" element={<ThankYou />} />
                </Routes>
            </FormProvider>
        </div>
    )
}

export default MainPage