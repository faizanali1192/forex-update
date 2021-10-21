import React from 'react'
import './Plans.css'
import KiteIcon from '../../../Assets/Icons/kite.png'
import AeroplaneIcon from '../../../Assets/Icons/aeroplane.png'
import RocketIcon from '../../../Assets/Icons/rocket.png'
import CheckIcon from '../../../Assets/Icons/check.png'

const Plans = () => {
    return (
        <div className="accounts-plans-wrapper">
            <div className="container">
                <div className="row align-items-start p-3 p-md-0 justify-content-between">
                    <div className="col-12 col-md-3 bg-white py-4 rounded accounts-plan-cards me-5 mt-5">
                        <div className="text-center">
                            <img src={KiteIcon} className="accounts-plans-cards-icons " />
                        </div>
                        <h4 className="mt-3 mb-5 text-center">Starter</h4>
                        <div className="row px-2" style={{ fontWeight: "500" }} >
                            <div></div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="  accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Online Chat Support</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="  accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">OPlatforms: MT4 & Mobile</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="  accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Instruments: Forex, CFDs & Commodities</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="  accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Free E-book</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="  accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Individual Competative</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="  accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Spreads  & Commissions</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="  accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Access to Breaking News & Market Research</p>
                            </div>
                            <div className="accounts-card-divider-wrapper">
                                <hr className="accounts-card-divider" />
                            </div>
                            <div className="text-center mt-3">
                                <button type="button" className="account-plans-buttons">OPEN ACCOUNT</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 bg-white py-4 rounded accounts-plan-cards me-5 mt-5">
                        <div className="text-center">
                            <img src={AeroplaneIcon} className="accounts-plans-cards-icons " />
                        </div>
                        <h4 className="mt-3 mb-5 text-center">Starter</h4>
                        <div className="row px-2" style={{ fontWeight: "500" }} >
                            <div></div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Online Chat Support</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className=" accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">OPlatforms: MT4 & Mobile</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className=" accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Instruments: Forex, CFDs & Commodities</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Free E-book</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Individual Competative</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Spreads  & Commissions</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Access to Breaking News & Market Research</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Online Phone Support</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Real Time Trading Signals</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className=" accounts-check-icon " />
                            </div>
                            <div className="col-10 ">
                                <p className="">Trading Education Programe</p>
                            </div>
                            <div className="accounts-card-divider-wrapper">
                                <hr className="accounts-card-divider" />
                            </div>
                            <div className="text-center mt-3">
                                <button type="button" className="account-plans-buttons">OPEN ACCOUNT</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 bg-white py-4 rounded accounts-plan-cards me-5 mt-5">
                        <div className="text-center">
                            <img src={RocketIcon} className="accounts-plans-cards-icons " />
                        </div>
                        <h4 className="mt-3 mb-5 text-center">Starter</h4>
                        <div className="row px-2" style={{ fontWeight: "500" }} >
                            <div></div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Online Chat Support</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className=" accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">OPlatforms: MT4 & Mobile</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className=" accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Instruments: Forex, CFDs & Commodities</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Free E-book</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Individual Competative</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Spreads  & Commissions</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Access to Breaking News & Market Research</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Online Phone Support</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className="accounts-check-icon " />
                            </div>
                            <div className="col-10  ">
                                <p className="">Real Time Trading Signals</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className=" accounts-check-icon " />
                            </div>
                            <div className="col-10 ">
                                <p className="">Trading Education Programe</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className=" accounts-check-icon " />
                            </div>
                            <div className="col-10 ">
                                <p className="">Account Execution Team</p>
                            </div>
                            <div className="col-1 me-1">
                                <img src={CheckIcon} className=" accounts-check-icon " />
                            </div>
                            <div className="col-10 ">
                                <p className="">Available 24/7 Trade Mentor</p>
                            </div>
                            <div className="accounts-card-divider-wrapper">
                                <hr className="accounts-card-divider" />
                            </div>
                            <div className="text-center mt-3">
                                <button type="button" className="account-plans-buttons">OPEN ACCOUNT</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Plans
