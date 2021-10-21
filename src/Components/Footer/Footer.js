import React from "react";
import "./Footer.css";
import {
    Link
} from "react-router-dom"
const Footer = () => {

    return (
        <div>
            <footer class="bg-dark text-center text-lg-start">
                {/* <!-- Grid container --> */}
                <div class="container p-5 ">
                    {/* <!--Grid row--> */}
                    <div class="row">
                        {/* <!--Grid column--> */}
                        <div class="col-lg-4 col-md-12 mb-5">
                            <div className="btn-center">

                                <div className="mb-3 ">
                                    <button
                                        type="button "
                                        className="btn btn-outline-light  m-1 btn-lg footer-login-btn"
                                    >
                                        LOG IN
                                    </button>
                                </div>
                                <button
                                    type="button "
                                    className="btn btn-outline-light m-1 btn-lg footer-open-account-btn"
                                >
                                    OPEN ACCOUNT
                                </button>
                            </div>
                            <div className="row ">
                                <div className="col-12 col-md-6" >
                                    <h5 className="fast-links-heading mt-5">Sitemap</h5>
                                    <Link to="/" className="nav-link p-0 ">  <li><div className="footer-link-style">Home</div></li></Link>
                                    <Link to="/about" className="nav-link p-0 "> <li><div className="footer-link-style">About</div></li></Link>
                                    <Link to="/about" className="nav-link p-0 "><li><div className="footer-link-style">Contact</div></li></Link>
                                    <Link to="/privacy-policy" className="nav-link p-0 "> <li><div className="footer-link-style">Privacy Policy</div></li></Link>
                                </div>
                                <div className="col-12 col-md-6 mt-md-5">
                                    <Link to="/accounts" className="nav-link p-0 ">  <li className="mt-md-4"  ><div className="footer-link-style">Account Type</div></li></Link>
                                    <Link to="/trading" className="nav-link p-0 "><li className=""><div className="footer-link-style">Trading Platform</div></li></Link>
                                    <Link to="/terms-and-conditions" className="nav-link p-0 "> <li className=""><div className="footer-link-style">Terms & Conditions</div></li></Link>

                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div class="col-lg-8 col-md-12 mb-4 mb-md-0 text-white p-0">
                            <h5 class="text-uppercase ">Risk Warning</h5>

                            <p>
                                Trading in Forex and CFDs carries a high level of risk and can
                                result in the loss of part or all of your investment.Trading in
                                Forex and CFDs may not be appropriate for all investors.You
                                should be aware of all the risks associated with Forex and CFD
                                trading and seek for independent advice.Past performance does
                                not constitute a reliable indication of future results.
                                Forecasts for the future do not constitute a reliable indicator
                                of future performance.Copyright for the pages and for the
                                screens displaying the pages, and for the information, material
                                and their arrangement, is owned by No name 1 all rights
                                reserved.
                            </p>
                            <p>
                                This information is intended for investors outside the United
                                States who are not US/Japanese citizens and residents.This
                                website is intended for informational purposes only.This
                                website is not directed at any jurisdiction and is not intended
                                for any use that would be contrary to local law or regulation.
                                The products described on this are not offered and may not be
                                sold in the United States/Japan or to US/Japanese citizens and
                                residents.
                            </p>
                        </div>
                        {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                </div >
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div class="text-center p-3 lower-footer text-white">
                    © 2021 ALL right reserved No Name 1
                </div>
                {/* <!-- Copyright --> */}
            </footer >
        </div >
    );
};

export default Footer;

