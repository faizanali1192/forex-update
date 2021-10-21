import React from 'react'
import './Contact.css'
import ContactImage from '../../../Assets/Images/contact-us.jpg'
const Contact = () => {
    return (
        <div className="container contact-wrapper ">
            <h1 className="text-center" style={{ color: "#A13234" }}>
                Contact Us
            </h1>
            <div className="row">
                <div className="col-12 col-md-8 "><img src={ContactImage} className="contact-image" /></div>

                <div className="col-12 col-md-4">
                    <form>
                        <input type="email" class="form-control contact-input mt-4" placeholder="Enter Your Name..." />
                        <input type="email" class="form-control contact-input mt-4" placeholder="Enter email" />
                        <textarea class="form-control contact-input mt-4" placeholder="Enter your Message.." rows="7"></textarea>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
