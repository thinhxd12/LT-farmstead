import React, { Component } from 'react'
import IndexItem from './IndexItem'

export default class Index extends Component {

    arrIndex = [
        { id: 1, name: "Agriculture", img: "./images/img5.png", desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
        { id: 2, name: "Fresh", img: "./images/img6.png", desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
        { id: 3, name: "Natural", img: "./images/img7.png", desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
        { id: 4, name: "Farm", img: "./images/img8.png", desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
        { id: 5, name: "Organic", img: "./images/img9.png", desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
        { id: 6, name: "Dairy", img: "./images/img10.png", desc: "Ras effic itur metusga via suscipit consectetur adipisicing unde omnis." },
    ]

    renderIndex = () => {
        return this.arrIndex.map((item, index) => {
            return <div key={index} className="col-md-4">
                <IndexItem item={item} />
            </div>
        })
    }

    render() {
        return (
            <div className="index">
                <div className="container">
                    <div className="row">
                        {this.renderIndex()}

                    </div>
                </div>
            </div>
        )
    }
}
