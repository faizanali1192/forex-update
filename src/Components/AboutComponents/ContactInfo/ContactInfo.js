import React from 'react'
import './ContactInfo.css'
import PhoneeIcon from '../../../Assets/Icons/phone.png'
import EmailIcon from '../../../Assets/Icons/email.png'
import ClockIcon from '../../../Assets/Icons/clock.png'
const ContactInfo = () => {
    return (
        <div className="contact-info-wrapper  ">
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row my-5">
                            <div className="col-12 col-md-2 ">
                                <img src={PhoneeIcon} className="contact-info-image" />
                            </div>
                            <div className="col-12 col-md-8">

                                <div className="contact-info-text d-inline">
                                    Support Phone <br />
                                    +441278226024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row my-4">
                            <div className="col-12 col-md-2">
                                <img src={EmailIcon} className="contact-info-image" />
                            </div>
                            <div className="col-12 col-md-8">

                                <div className="contact-info-text d-inline">
                                    Email: <br />
                                    support@no name 1.com 

                                </div>
                            </div>
                        </div>
                        </div>
                    <div className="col-12  mt-5">
                        <div className="row">
                            <div className="col-12 col-md-1 ">
                                <img src={ClockIcon} className="contact-info-image" />
                            </div>
                            <div className="col-12 col-md-8">

                                <div className="contact-info-text-2 d-inline">
                                    Monday to Friday: 9:30-21:00 GMT <br /> Our Address:Kärntner Ring 11-13 / 27<br/>
Our Post Code: 9074   
                                    
                                </div>
                                </div>
                        </div>
                </div>
        </div>      
            </div>      
        </div >  
    )  
}  
  
export default ContactInfo
