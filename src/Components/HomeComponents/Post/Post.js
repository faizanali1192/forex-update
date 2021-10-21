import React from 'react'
import './Post.css'
import PostImage from '../../../Assets/Images/home-post.jpg'
const Post = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="p-3 p-lg-0 ">
                        <h1 >A TRADE ORIENTED BROKER</h1>
                        <p className="pe-0 pe-lg-5" style={{ fontSize: "18px" }}>No Name 1 is a top online Forex broker with many years of experience in the market. No name 1 being a client-oriented company, places the needs of every one of our customers as its own priority. We are committed to providing all our investors a wide range of options when trading to help them become better at trading and also make profits.<br />
                            At No name 1 we ensure all our clients are up to date with the market trends and also provide them with latest trading technology and Forex tools by investing continuously in innovations.
                            These instruments are updated on a regular basis thereby offering new platforms and services to answer the various questions and meet the need of every trader, in so doing, we are keeping our promise and commitment towards a fair and open trading.

                          
                        </p>
                        <button type="button" class="home-post-btn ">Crypto Trading</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="w-100 shadow" src={PostImage} />
                </div>
            </div>
        </div>
    )
}

export default Post
