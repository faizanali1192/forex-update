import React from 'react'
import './Header.css'
import {
    Link
} from "react-router-dom"
const Header = () => {
    return (
        <div className=" header-wrapper">
            <div className="container ">
                <nav class="navbar navbar-expand-lg navbar-dark  ">
                    <div class="container-fluid">
                        <Link to="/" className="nav-link p-0 ">   <a class="navbar-brand text-light" href="#">Forex</a></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse  " id="navbarNavAltMarkup">
                            <div class="navbar-nav ms-auto" >

                                <Link to="/about" className="nav-link p-0 ">   <a class="nav-link  text-light" href="#"  >About</a></Link>
                                <Link to="/accounts" className="nav-link p-0 "><a class="nav-link text-light" href="#">Accounts </a></Link>
                                <Link to="/trading" className="nav-link p-0 "> <a class="nav-link text-light" href="#">Trading</a></Link>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Header
