import React, { Component } from 'react'

export default class FeatureItem extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className="feature__item">
                <img src={item.img} alt="..." className="img-fluid" />
                <a href="/#" className="title__link">{item.name}</a>
            </div>
        )
    }
}
