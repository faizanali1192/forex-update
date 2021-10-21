import React from 'react'

import TradingPostImage from '../../../Assets/Images/trading-post.jpg'
const Post = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="p-3 p-lg-0 ">
                        <h1 >A TRADE ORIENTED BROKER</h1>
                        <p className="pe-0 pe-lg-5" style={{ fontSize: "18px" }}>No Name 1 highest purpose is to turn its clients into successful traders and increase their success rates as much as possible. For that purpose we give you the No Name 1 Online trader, which enables you to be 100% involved in the trading process and adjust according to the market conditions, all the while letting you plan your trading activities to your preference.
                            <br />
                            Utilize the full scope of the latest technological developments in the field by trading from any internet connectible device. Investing in Forex, Commodities and CFD has never been easier thanks to the No Name 1 Online Trader.
                            No Name 1 grants you a gateway to all your trading needs with the online and mobile trading applications.
                            They are extremely intuitive and functional, enabling you to start a trade whenever you want, from anywhere in the world. In case you already have a trading account you can start a trade immediately.
                        </p>

                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="w-100 shadow" src={TradingPostImage} />
                </div>
                <div className="col-lg-12 mt-4 p-3 p-lg-0">
                    <p style={{ fontSize: "18px" }}>


                        The No Name 1 Online Trader present clients with the option to choose from a number of languages, it features the latest charts, fast operation of the trades, and best of all, it makes everything easy. You have the ability to access to trader from a number of different devices such as Apple or Android phone, tablet or PC. The platform is easy to use on every device and you can handle your investments with just a few clicks.
                        Due to the intuitiveness and easiness of use, the No Name 1 Online trader will make sure that you are fully informed about all trades that interest you. Stay knowledgeable on the latest market news and trends, without having to leave your couch.

                        The financial market can be very volatile and the conditions can change in a matter of minutes. Therefore, you need to be able to react quickly in such cases. With the No Name 1 Online Trader, you act accordingly and access your trades at any moment. The advantage is in your hands.

                        With the hastened pace of modern life, you need to be constantly on the go, but the platform lets you combine that with your trading needs, without having to compromise. It`s accessible from any browser, there is no need for you to be stuck to any specific place. Be it in your office, or from a friend`s PC, logging into your account and trading or just checking something is quick and simple.

                        Using No Name 1 to trade is like a walk in the park.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Post
