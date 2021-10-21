import React from 'react'
import Funding from '../Components/AccountsComponents/Funding/Funding'
import Hero from '../Components/AccountsComponents/Hero/Hero'
import Plans from '../Components/AccountsComponents/Plans/Plans'

const Account = () => {
    return (
        <div>
            <Hero />
            <Plans />
            <Funding />
        </div>
    )
}

export default Account
