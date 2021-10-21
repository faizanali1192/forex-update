import React from 'react'
import './Steps.css'
const Steps = () => {
    return (
        <div className="steps-wrapper mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center text-white">
                        <h1>
                            Steps for opening a No Name 1 <br />Trading Profile
                        </h1>
                    </div>
                </div>
                <div className="row text-white mt-5">
                    <div className=" col-1 home-steps-numbers">
                        <h1>
                            01
                        </h1>
                    </div>
                    <div className="col-8 ">
                        <h2 className="mt-2">
                            Pick the account types depending on your <br /> objectives and needs
                        </h2>
                        <p>
                            Three available account types are supplemented with lots of additional features that bring some extra pluses to the investor. You can easily sign up for any of them. And keep the notice that you can change the account type after putting money on your acc.
                        </p>
                    </div>
                </div>
                <div className="row text-white mt-5 pb-4">
                    <div className=" col-1 home-steps-numbers">
                        <h1>
                            02
                        </h1>
                    </div>
                    <div className="col-8 ">
                        <h2 className="mt-2">
                            Fill out the demanded information and confirm your identity
                        </h2>
                        <p>
                            You just need to complete information profile with your personal data and to provide some identity papers.
                        </p>
                    </div>
                </div>
                <div className="row text-white mt-5">
                    <div className=" col-1 home-steps-numbers">
                        <h1>
                            03
                        </h1>
                    </div>
                    <div className="col-8 ">
                        <h2 className="mt-2">
                        Depositing money into your account
                        </h2>
                        <p>
                        Once we approve and authorize your application, you will be able to make your payments and withdrawals swiftly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps
