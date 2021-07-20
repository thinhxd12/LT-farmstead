import React, { Component } from 'react'

export default class CustomerItem extends Component {
    render() {
        let { customer } = this.props;
        return (
            <div className="customer__item">
                <div className="container p-5">
                    <div className="row p-5">
                        <div className="col-3">
                            <div className="customer__info">
                                <img src={customer.img} alt="..." />
                                <h4>{customer.name}</h4>
                                <p>{customer.iden}</p>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="customer__quote">
                                <i className="fas fa-quote-left    "></i>
                                <span> {customer.quote} </span>
                                <i className="fas fa-quote-right    "></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
