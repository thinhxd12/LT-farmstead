import React, { Component } from 'react'
import Slider from "react-slick";

export default class Carousel extends Component {





    render() {


        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true,
        };


        return (


            <div className="carousel">
                <div className="carousel__item__1">
                    <h1>Farm</h1>
                    <div className="carousel__info">
                        <h3 className="txt__title">Welcome to Farmstead
                            where Natural Food is born!</h3>
                        <p className="txt__text my-3" style={{ fontSize: '20px' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        <a href="/#" className="btn__LearnMore">Learn more</a>
                    </div>
                </div>
                <div className="carousel__item__2">
                    <div className="carousel__content">
                        <Slider {...settings}>
                            <div className="carousel__item">
                                <div className="carousel__item__content" style={{ background: `url(./images/b1.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
                                    <div className="carousel__item__info">
                                        <h4>01/03</h4>
                                        <p>Agriculture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel__item">
                                <div className="carousel__item__content" style={{ background: `url(./images/b4.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
                                    <div className="carousel__item__info">
                                        <h4>02/03</h4>
                                        <p>Farm Field</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel__item">
                                <div className="carousel__item__content" style={{ background: `url(./images/b8.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
                                    <div className="carousel__item__info">
                                        <h4>03/03</h4>
                                        <p>Organic Farm</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        )
    }
}

