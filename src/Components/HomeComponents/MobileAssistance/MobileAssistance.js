import React from 'react'
import './MobileAssistace.css'
import AssistanceImage from '../../../Assets/Images/assistance.jpg'
const MobileAssistance = () => {
    return (
        <div className="home-mobile-assistance-wrapper mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={AssistanceImage} className="home-mobile-assistance-image" />
                        <h2 className="text-center px-3 pt-4 text-white">
                            FOR LIVE ASSISTANCE NO NAME1 PROVIDES YOU WITH 24 HOURS SUPPORT
                        </h2>
                        <button className="home-assistance-btn mt-3">Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileAssistance
