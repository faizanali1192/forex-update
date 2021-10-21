import React from 'react'
import './MobileTrade.css'
import NotificationIcon from '../../../Assets/Icons/notification.png'
import UserIcon from '../../../Assets/Icons/user.png'
import TopNotchIcon from '../../../Assets/Icons/devices.png'
import AlgoTradingIcon from '../../../Assets/Icons/file.png'
import StocksIcon from '../../../Assets/Icons/increasing.png'
import ExcellentClientIcon from '../../../Assets/Icons/credibility.png'
import PersonalizedEducationIcon from '../../../Assets/Icons/personal-development.png'
import SuperiorReqestIcon from '../../../Assets/Icons/algorithm.png'
const MobileTrade = () => {
    return (
        <div className="container mt-4 mobile-home-trade-wrapper">
            <div className="row">
                <div className="col-12">
                    <h1 className="mobile-choose-trade-heading text-center "  >Trade With Us</h1>
                    <p>
                        No name 1 presents its clients with the optimal platform for investing in Forex, Futures and Commodities. We are committed to providing each and every client with the best experience possible and always aim to provide the necessary means  and resources for successful trading.
                    </p>
                    <h2 className="mobile-choose-trade-heading"  >No Name Provides you with:</h2>
                </div>
                <div className="col-12 text-center  mt-5">
                    <img src={NotificationIcon} className="home-mobile-trade-icons" />
                    <h6 className="mt-3 home-mobile-trade-icons-text">TIMELY REPORTS AND <br />
                        INDICATORS</h6>
                </div>
                <div className="col-12 text-center  mt-4">
                    <img src={UserIcon} className="home-mobile-trade-icons" />
                    <h6 className="mt-3 home-mobile-trade-icons-text">VARIOUS ACCOUNT
                        <br />
                        OPTIONS</h6>
                </div>
                <div className="col-12 text-center  mt-4">
                    <img src={TopNotchIcon} className="home-mobile-trade-icons" />
                    <h6 className="mt-3 home-mobile-trade-icons-text">TOP NOTCH TRADING
                        <br />
                        PLATFORM</h6>
                </div>
                <div className="col-12 text-center  mt-4">
                    <img src={AlgoTradingIcon} className="home-mobile-trade-icons" />
                    <h6 className="mt-3 home-mobile-trade-icons-text">ALGORITHMETIC
                        <br />
                        TRADING</h6>
                </div>
                <div className="col-12 text-center  mt-4">
                    <img src={StocksIcon} className="home-mobile-trade-icons" />
                    <h6 className="mt-3 home-mobile-trade-icons-text">INVESTING IN FORES,
                        <br />
                        FUTURES AND INDICES</h6>
                </div>
                <div className="col-12 text-center  mt-4">
                    <img src={ExcellentClientIcon} className="home-mobile-trade-icons" />
                    <h6 className="mt-3 home-mobile-trade-icons-text">EXCELLENT
                        <br />
                        CLIENTS</h6>
                </div>
                <div className="col-12 text-center  mt-4">
                    <img src={PersonalizedEducationIcon} className="home-mobile-trade-icons" />
                    <h6 className="mt-3 home-mobile-trade-icons-text">PERSONALIZED
                        <br />
                        EDUCATION</h6>
                </div>
                <div className="col-12 text-center  mt-4">
                    <img src={SuperiorReqestIcon} className="home-mobile-trade-icons" />
                    <h6 className="mt-3 home-mobile-trade-icons-text">SUPERIOR
                        <br />
                        REQUEST</h6>
                </div>
            </div>
        </div>
    )
}

export default MobileTrade
