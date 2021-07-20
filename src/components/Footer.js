import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Find Us</h3>
                            <p>Address: 10001 Alleghany st, 5th Avenue, 235 Terry, London.</p>
                            <p>Phone: <a href="tel:+12 23456790">+12 23456790</a></p>
                            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                            <p>Fax: <a href="+ 11 367 21890">+ 11 367 21890</a></p>
                        </div>
                        <div className="col-md-4 footer__logo">
                            <a className="navbar-brand" href="/#">
                                <i className="fas fa-leaf"></i>
                                <span>Farmstead</span>
                            </a>
                            <p>Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam eget turpis ornare, euismod ligul aeget, enenatis dui.</p>
                            <p>© 2021 Farmstead. All Rights Reserved | WordPress Theme by <a href="/#"> W3Layouts.</a></p>
                        </div>
                        <div className="col-md-4">
                            <h3>NEWSLETTER</h3>
                            <p>Subscribe to our mailing list and get updates to your email inbox.</p>
                            <div className="footer__input">
                                <input placeholder="Email Address" />
                                <button className="btn__LearnMore__1"><i className="fas fa-paper-plane"></i></button>
                                <ul className="footer__social">
                                        <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="/#"><i className="fab fa-linkedin" /></a></li>
                                        <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="/#"><i className="fab fa-google-plus" /></a></li>
                                        <li><a href="/#"><i className="fab fa-github" /></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
