import React from 'react'
import './About.css'
import AboutHeroImage from '../../../Assets/Images/about-hero.jpg'
const Hero = () => {
    return (
        <div className="container text-center my-5">
            <img src={AboutHeroImage} className="about-hero-image" />
        </div>
    )
}

export default Hero
