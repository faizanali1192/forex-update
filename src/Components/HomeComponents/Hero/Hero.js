import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <div className="home-hero-wrapper">
            <div className="container">
                <div className="row d-flex pt-5">
                    <div className="col-12 col-md-6 home-hero-heading text-light">
                        INNOVATE POWER TOOLS THAT ALIGN WITH YOUR GOALS
                    </div>
                    <div className="col-12 col-md-6"></div>
                    <div className=" col-12 col-md-4 home-hero-text text-light mt-1">
                        Trading in Forex, Metals, Indexes,Energies, Stocks ETFs and Cryptocurrencies
                    </div>
                    <div className="col-12 col-md-8"></div>
                    <div className=" col-7 col-md-3 mt-3">
                        <button type="button" class="btn btn-outline-light w-100 rounded-0 home-hero-button">OPEN ACCOUNT</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
