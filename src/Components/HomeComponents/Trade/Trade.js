import React from 'react'
import './Trade.css'
import NotificationIcon from '../../../Assets/Icons/notification.png'
import UserIcon from '../../../Assets/Icons/user.png'
import TopNotchIcon from '../../../Assets/Icons/devices.png'
import AlgoTradingIcon from '../../../Assets/Icons/file.png'
import StocksIcon from '../../../Assets/Icons/increasing.png'
import ExcellentClientIcon from '../../../Assets/Icons/credibility.png'
import PersonalizedEducationIcon from '../../../Assets/Icons/personal-development.png'
import SuperiorReqestIcon from '../../../Assets/Icons/algorithm.png'
const Trade = () => {
    return (
        <div className="trade-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center ">
                        <div className="home-trade-heading">
                            Trade With Us
                        </div>
                        <div className="home-trade-text mt-3">
                            No name 1 presents its clients with the optimal platform for investing in Forex, Futures and Commodities. We are committed to providing each and every client with the best experience possible and always aim to provide the necessary means  and resources for successful trading.
                        </div>
                        <h3 className="text-white text-start mt-5">
                            No Name Provides you <br />with:
                        </h3>
                    </div>
                    <div className="row mt-4 justify-content-between ">

                        <div className="col-md-3   bg-white text-center p-4 rounded home-trading-cards">
                            <img src={NotificationIcon} className="home-trade-icons mb-2" />
                            <h6 className="home-trading-cards-text">
                                Timely reports and indicators, which let you follow how your trading develops with each signal, along with vital success strategies
                            </h6>
                        </div>
                        <div className="col-md-3  bg-white text-center p-4 rounded home-trading-cards">
                            <img src={UserIcon} className="home-trade-icons mb-2" />
                            <h6 className="home-trading-cards-text">
                                Various account options, catering to each client`s specific circumstances. You can also upgrade your account at a later stage.                            </h6>
                        </div>
                        <div className="col-md-3  bg-white text-center p-4 rounded home-trading-cards">
                            <img src={TopNotchIcon} className="home-trade-icons mb-2" />
                            <h6 className="home-trading-cards-text">
                                Top notch trading platforms, available on all relevant devices – PC, Mac, Android and Apple phones. </h6>
                        </div>
                        <div className="col-md-3   bg-white text-center p-4 rounded home-trading-cards">
                            <img src={AlgoTradingIcon} className="home-trade-icons mb-2" />
                            <h6 className="home-trading-cards-text">
                                Algorithmic Trading – a computer program which aids you by making trading faster and better overall                          </h6>
                        </div>

                    </div>
                    <div className="row mt-4 justify-content-between ">



                        <div className="col-md-3   bg-white text-center p-4 rounded home-trading-cards">
                            <img src={StocksIcon} className="home-trade-icons mb-2" />
                            <h6 className="home-trading-cards-text">
                                Means for investing in Forex, futures and indices on a wide number of international marketplaces.

                            </h6>

                        </div>
                        <div className="col-md-3  bg-white text-center p-4 rounded home-trading-cards">
                            <img src={ExcellentClientIcon} className="home-trade-icons mb-2" />
                            <h6 className="home-trading-cards-text">
                                Excellent client care and technical support, which lets you focus on trading                           </h6>
                        </div>
                        <div className="col-md-3  bg-white text-center p-4 rounded home-trading-cards">
                            <img src={PersonalizedEducationIcon} className="home-trade-icons mb-2" />
                            <h6 className="home-trading-cards-text">
                                A personalized education system – massive amounts of trading information at your disposal
                            </h6>
                        </div>
                        <div className="col-md-3   bg-white text-center p-4 rounded home-trading-cards">
                            <img src={SuperiorReqestIcon} className="home-trade-icons mb-2" />
                            <h6 className="home-trading-cards-text">
                                Superior request processing and spreads                         </h6>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Trade
