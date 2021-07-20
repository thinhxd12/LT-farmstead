import React, { Component } from 'react'

export default class Block extends Component {
    render() {
        return (
            <div className="block py-5">
                <div className="container py-5">
                    <div className="row">

                        <div className="col-md-6 pt-5">
                            <h4 className="txt__title__small">Why choose us</h4>
                            <h3 className="txt__title">Quality food is the most important thing in our life</h3>
                            <p className="txt__text my-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.</p>
                            <div className="block__info mt-5">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="block__info__title">
                                            <i className="fas fa-users"></i>
                                            <h5>Qualified Staff</h5>
                                        </div>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                                    </div>
                                    <div className="col-6">
                                        <div className="block__info__title">
                                            <i className="fas fa-life-ring"></i>
                                            <h5>Excellent Service</h5>
                                        </div>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="block__item">
                                <div className="block__item__img">
                                    <img src="./images/image.jpg" alt="..." className="img-fluid" />
                                </div>
                                <div className="block__item__info">
                                    <h2>36+</h2>
                                    <h3>YEARS OF EXPERIENCE</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
