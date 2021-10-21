import React from 'react'
import './InnerHero.css'
import ForexIcon from '../../../Assets/Icons/forex.png'
import StocksIcon from '../../../Assets/Icons/increasing.png'
import CryptoIcon from '../../../Assets/Icons/crypto.png'
const InnerHero = () => {
    return (
        <div className="container innerhero-wrapper bg-light ">
            <div className="row text-center h-100  align-items-center">
                <div className="col-12 col-md-4 ">
                    <img src={ForexIcon} className="inner-hero-icons" />
                    <div className="inner-hero-icons-text">
                        Forex
                    </div>
                </div>
                <div className="col-12 col-md-4"> <img src={StocksIcon} className="inner-hero-icons" />
                    <div className="inner-hero-icons-text">
                        Stocks
                    </div>
                </div>
                <div className="col-12 col-md-4"> <img src={CryptoIcon} className="inner-hero-icons" />
                    <div className="inner-hero-icons-text">
                        Crypto
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnerHero
