import React, { Component } from 'react'

export default class Products extends Component {
    arrProduct = [
        { id: 1, img: "./images/g2.jpg", name: "Fresh Carrots" },
        { id: 2, img: "./images/g3.jpg", name: "Strawberry" },
        { id: 3, img: "./images/g6.jpg", name: "Our Farm" },
        { id: 4, img: "./images/g5.jpg", name: "Fresh Apples" },
        { id: 5, img: "./images/g1.jpg", name: "Awesome Fields" },
        { id: 6, img: "./images/g7.jpg", name: "Fresh Grapes" },
        { id: 7, img: "./images/g8.jpg", name: "Hot Peppers" },
    ]

    renderProduct = () => {
        return this.arrProduct.map((product, index) => {
            return <div key={index} className="col-md-3 p-0">
                <div className="product__item">
                    <img src={product.img} alt="..."/>
                    <div className="product__info">
                        <h5>{product.name}</h5>
                    </div>
                </div>
            </div>
        })
    }

    render() {

        return (
            <div className="products py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="txt__title__small">Gallery</h4>
                            <h3 className="txt__title">Our Products</h3>
                            <p className="txt__text mt-3 mb-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo.</p>
                            <a href="/#" className="btn__LearnMore">Discover More</a>
                        </div>
                        {this.renderProduct()}
                    </div>
                </div>
            </div>
        )
    }
}
