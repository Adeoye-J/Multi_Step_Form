import React, { createContext, useState } from "react"
import arcade from "../assets/images/icon-arcade.svg"
import pro from "../assets/images/icon-pro.svg"
import advanced from "../assets/images/icon-advanced.svg"

export const FormContext = createContext();

export const FormProvider = ({children}) => {

    const [selectedSubscriptionId, setSelectedSubscriptionId] = useState(1)
    const [duration, setDuration] = useState("monthly")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [additional, setAdditional] = useState([])

    const plans = [
        {
            id: 1,
            icon: arcade,
            text: "Arcade",
            monthly: 9,
            yearly: 90,
            free: "2 months free"
        },
        {
            id: 2,
            icon: advanced,
            text: "Advanced",
            monthly: 12,
            yearly: 120,
            free: "2 months free"
        },
        {
            id: 3,
            icon: pro,
            text: "Pro",
            monthly: 15,
            yearly: 150,
            free: "2 months free"
        }
    ]

    const add_ons = [
        {
            id: 1,
            title: "Online service",
            text: "Access to multiplayer games",
            yearly: 10,
            monthly: 1
        },
        {
            id: 2,
            title: "Larger storage",
            text: "Extra 1TB of cloud save",
            yearly: 20,
            monthly: 2
        },
        {
            id: 3,
            title: "Customizable profile",
            text: "Custom theme on your profile",
            yearly: 20,
            monthly: 2
        }
    ]

    return(
        <FormContext.Provider 
            value={{
                selectedSubscriptionId, 
                setSelectedSubscriptionId,
                duration, 
                setDuration, 
                name, 
                setName, 
                email, 
                setEmail, 
                additional, 
                setAdditional,
                add_ons,
                plans
            }}
        >
            {children}
        </FormContext.Provider>
    )
}
