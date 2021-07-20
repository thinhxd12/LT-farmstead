import React, { Component } from 'react'

export default class ServiceItem extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className="service__item">
                <a href="/#">
                <img src={item.img} alt="..." className="img-fluid"/>
                </a>
                <div className="service__item__info">
                <label>{item.label}</label>
                <a href="/#" className="title__link">{item.name}</a>
                <p>{item.desc}</p>
                </div>
            </div>
        )
    }
}
