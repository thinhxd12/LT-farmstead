import React, { Component } from 'react'
import ServiceItem from './ServiceItem'

export default class Services extends Component {

    arrService = [
        { id: 1, img: "./images/service1.jpg", label: "Natural", name: "Agriculture Products", desc: "Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium, totam rem aperiam" },
        { id: 2, img: "./images/service2.jpg", label: "Agriculture", name: "Fresh Vegetables", desc: "Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium, totam rem aperiam" },
        { id: 3, img: "./images/service3.jpg", label: "Farm", name: "Organic Products", desc: "Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium, totam rem aperiam" },
    ]

    renderServicesItem = () => {
        return this.arrService.map((item, index) => {
            return <div className="col-md-4" key={index}>
                <ServiceItem item={item}/>
            </div>
        })
    }

    render() {
        return (
            <div className="services py-5">
                <div className="container py-5">
                    <div className="services__info pb-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>What we do</h5>
                                <h4>Why Choose Our Fresh Organic Foods</h4>
                            </div>
                            <div className="col-md-6">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque,
                                    eaque ipsa quae ab illo inventore.Sed ut perspiciatis unde omnis iste natus error sit.</p>
                            </div>
                        </div>
                        <h1>Services</h1>
                    </div>
                    <div className="row pt-3">
                        {this.renderServicesItem()}

                    </div>
                </div>
            </div>
        )
    }
}
