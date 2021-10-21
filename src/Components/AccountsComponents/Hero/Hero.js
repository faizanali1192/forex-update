import React from 'react'
import './Hero.css'
import AccountHeroImage from '../../../Assets/Images/account-hero.jpg'
const Hero = () => {
    return (
        <div className="bg-white">
            <div className="container">

                <div className="row text-center">
                    <div className="col-12 mt-5">
                        <h1 className="account-hero-heading">Account Types</h1>
                        <p >
                            No name offers you three different account types from you can choose from. <br />Each of the come with their own benefits.
                        </p>
                        <img src={AccountHeroImage} className="account-hero-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
