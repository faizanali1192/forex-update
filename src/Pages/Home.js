import React from 'react'
import Assistance from '../Components/HomeComponents/Assistance/Assistance'
import Choose from '../Components/HomeComponents/Choose/Choose'
import Hero from '../Components/HomeComponents/Hero/Hero'
import InnerHero from '../Components/HomeComponents/InnerHero/InnerHero'
import MobileAssistance from '../Components/HomeComponents/MobileAssistance/MobileAssistance'
import MobileTrade from '../Components/HomeComponents/MobileTrade/MobileTrade'
import Post from '../Components/HomeComponents/Post/Post'
import Steps from '../Components/HomeComponents/Steps/Steps'
import Trade from '../Components/HomeComponents/Trade/Trade'

const Home = () => {
    return (
        <div>
            <Hero />
            <InnerHero />
            <Post />
            <Trade />
            <Assistance />
            <Choose />
            <Steps />
            <MobileTrade />
            <MobileAssistance />
        </div>
    )
}

export default Home
