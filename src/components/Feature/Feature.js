import React, { Component } from 'react'
import FeatureItem from './FeatureItem'

export default class Feature extends Component {

    arrFeatures = [
        { id: 1, name: 'Natural Products', img: './images/img4.png' },
        { id: 2, name: 'Wheat Cultivation', img: './images/img2.png' },
        { id: 3, name: 'Modern Truck', img: './images/img1.png' },
        { id: 4, name: 'Organic Products', img: './images/img3.png' }
    ]

    renderItem = () => {
        return this.arrFeatures.map((item, index) => {
            return <div key={index} className="col-md-6">
                <FeatureItem item={item} />
            </div>
        })
    }


    render() {
        return (
            <div className="features py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 pr-5">
                            <div className="feature__info">
                                <h4 className="txt__title__small">Grow Naturally</h4>
                                <h3 className="txt__title">Leaders in the field</h3>
                                <p className="txt__text my-3">Aurabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et, sed commodo risus. Nullam sit amet laoreet elit. Suspendisse non init magnaa velit efficitur, dolor eget ex fermentum.</p>
                                <a href="/#" className="btn__LearnMore">Discover More</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                {this.renderItem()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
