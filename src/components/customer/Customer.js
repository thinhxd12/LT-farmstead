import React, { Component } from 'react'
import CustomerItem from './CustomerItem'
import Slider from "react-slick";

export default class Customer extends Component {

    arrCustomer = [
        { id: 1, name: 'Dennis Wilson', iden: 'Customer', img: './images/testi1.jpg', quote: 'Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium Quas minima sunt natus tempore, maiores aliquid modi felis sequi optio lacinia id ipsum non velit, culpa.voluptate rem ullam dolore nisi est quasi, doloribus tempora.est elit. Non quae, fugiat ad libero justo sed amet' },
        { id: 2, name: 'Wilson Dennis', iden: 'Customer', img: './images/testi2.jpg', quote: 'Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium Quas minima sunt natus tempore, maiores aliquid modi felis sequi optio lacinia id ipsum non velit, culpa.voluptate rem ullam dolore nisi est quasi, doloribus tempora.est elit. Non quae, fugiat ad libero justo sed amet' },
        { id: 3, name: 'Nis Delson', iden: 'Customer', img: './images/testi3.jpg', quote: 'Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium Quas minima sunt natus tempore, maiores aliquid modi felis sequi optio lacinia id ipsum non velit, culpa.voluptate rem ullam dolore nisi est quasi, doloribus tempora.est elit. Non quae, fugiat ad libero justo sed amet' },

    ]
    settingSlick = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    renderCustomer = () => {
        return this.arrCustomer.map((item, index) => {
            return <div key={index}>
                <CustomerItem customer={item} />

            </div>
        })
    }


    render() {

        return (
            <div className="customer" style={{
                background: 'url(./images/bg1.jpg)',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top"
            }}>
                <div className="container">
                    <Slider {...this.settingSlick}>
                        {this.renderCustomer()}

                    </Slider>

                </div>
            </div>
        )
    }
}
