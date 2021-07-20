import React, { Component } from 'react'

export default class IndexItem extends Component {
    render() {
        let { item } = this.props;
        return (
            <a href="/#">
                <div className="index__item">
                    <div className="row">
                        <div className="col-3">
                            <img src={item.img} alt="..." className="img-fluid" />

                        </div>
                        <div className="col-9">
                            <div className="index__item__info">
                                <h4 className="title__link">{item.name}</h4>
                                <p>{item.desc}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </a>
        )
    }
}
