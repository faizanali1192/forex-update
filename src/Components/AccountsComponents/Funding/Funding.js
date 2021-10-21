import React from 'react'
import './Funding.css'
const Funding = () => {
    return (
        <div className="container my-5">
            <div className="row m-2 m-md-0">
                <div className="col-12 text-center">
                    <h1 style={{ color: '#A13234' }}>Account Funding</h1>
                    <p >There are 3 different ways to fund your No account</p>
                </div>
                <div className="col-12 col-md-5 mt-5">
                    <h3 style={{ color: '#A13234' }}>1. Credit Card/Debit Card</h3>
                    <p className="mb-4">The best way to fund your account is with a credit or debit card. The transfer is immediate and secure.
                        <br />
                        Minimum transaction amount $250 with a maximum amount $500. Please not your card should be enabled for international transactions.</p>
                    <h3 style={{ color: '#A13234' }}>2. Bank Draft</h3>
                    <p className="mb-4">You can utilize your banks services and transfer funds using a bank draft. Please note that in some cases it might take up to 5 days for your funds to clear.</p>
                    <h3 style={{ color: '#A13234' }}>3. Wire Transfer</h3>
                    <p className="mb-4">Please use the details provided by your Senior Broker. The minimum
                        amount is $10.000 for bank wires. If you have online banking you
                        can input the details provided online, or visit your bank and fill in the
                        wire transfer form. Please remember to provide your Senior Broker
                        the remittance slip.
                        <br />
                        Depending on your bank your funds might take up to 5 days to
                        clear. As soon as the funds are in your trading account you will
                        receive an email notification.</p>
                    <h3 style={{ color: '#A13234' }}>In case you would like to ask anything related to putting money on the Live Account, feel free to get in touch with a No Name 1 employee</h3>
                    <button className="accounts-funding-btn mt-4">GET IN TOUCH</button>
                </div>
                <div className="col-12 col-md-2"></div>


                <div className="col-12 col-md-5 mt-5">
                    <h3 style={{ color: '#A13234' }}>Withdrawing Funds</h3>
                    <p className="mb-4">In order to submit a withdrawal request you need to:</p>
                    <li style={{ color: "black", fontWeight: "400" }}>
<div style={{ backgroundColor: "#A13234", height: "8px", width: "8px", borderRadius: "50%", display: "inline-block" }}></div>
<div style={{ display: "inline", marginLeft: "10px" }}>

    Log in to your account in your client area and submit a withdrawal request.
</div>

</li>
<li style={{ color: "black", fontWeight: "400" }}>
<div style={{ backgroundColor: "#A13234", height: "8px", width: "8px", borderRadius: "50%", display: "inline-block" }}></div>
<div style={{ display: "inline", marginLeft: "10px" }}>

    Your request will be addressed and processed promptly. Usually, provided the account is verified the request is process within the next 2 business days. Depending on your bank, your funds might take longer to appear in your bank account.
</div>

</li>

<h3 className="mb-4" style={{ color: '#A13234', marginTop: "60px" }}>Things you should take into
account:

</h3>
<li style={{ color: "black", fontWeight: "400" }}>
<div style={{ backgroundColor: "#A13234", height: "8px", width: "8px", borderRadius: "50%", display: "inline-block" }}></div>
<div style={{ display: "inline", marginLeft: "10px" }}>

The initial amount invested will be returned through the same method deposited. If the requested amount exceeds the initial invested amount, you need to provide us with the bank account details of an account under your name, in order to receive the excess amount
</div>

</li>
<li style={{ color: "black", fontWeight: "400" }}>
<div style={{ backgroundColor: "#A13234", height: "8px", width: "8px", borderRadius: "50%", display: "inline-block" }}></div>
<div style={{ display: "inline", marginLeft: "10px" }}>

For further inquiries regarding funding please contact us on supportnoname1.com or through our live chat.
</div>

</li>


                </div>
            </div>
        </div>
    )
}

export default Funding
