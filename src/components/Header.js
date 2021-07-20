
import React, { Component } from 'react'



export default class Header extends Component {
    state = {
        className: ''
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }
    resizeHeaderOnScroll = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200;
        // headerEl = document.getElementById("header");

        if (distanceY > shrinkOn) {
            this.setState({
                className: 'header-fixed'
            })
            // headerEl.classList.add("smaller");
        } else {
            // headerEl.classList.remove("smaller");
            this.setState({
                className: ''
            })
        }
    }
    render() {

        return (

            <header className={`header d-flex align-items-center fixed-top ${this.state.className}`} id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-md">
                        <a className="navbar-brand" href="/#">
                            <i className="fas fa-leaf"></i>
                            Farmstead
                        </a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="/#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/#">
                                        <i className="fas fa-search    "></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">
                                        <i className="far fa-moon    "></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="dropdownId" data-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-bars"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="/#">Action 1</a>
                                        <a className="dropdown-item" href="/#">Action 2</a>
                                        <a className="dropdown-item" href="/#">Action 1</a>
                                        <a className="dropdown-item" href="/#">Action 2</a>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </nav>

                </div>




            </header>

        )
    }
}
