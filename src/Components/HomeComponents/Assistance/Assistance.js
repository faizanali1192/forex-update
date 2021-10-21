import React from 'react'
import './Assistance.css'
import AssistanceImage from '../../../Assets/Images/assistance.jpg'
const Assistance = () => {
    return (
        <div className="home-assistance-wrapper my-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-6 d-flex align-items-center text-white">
                        <div className="row">
                            <div className="col-12">
                                <h1>
                                    FOR LIVE <br />ASSISTANCE NO<br /> NAME1 PROVIDES <br /> YOU WITH 24 HOURS <br /> SUPPORT
                                </h1>
                            </div>
                            <div className="col-12 mt-2">
                                <button className="home-assistance-btn">Learn More</button>
                            </div>
                        </div>

                    </div>

                    <div className="col-6 text-center">
                        <img src={AssistanceImage} className="home-assistance-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assistance
