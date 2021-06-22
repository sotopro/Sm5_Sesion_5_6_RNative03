import React, { Component } from 'react';

import './index.css';

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 10
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 6
    },
]

export default class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: []
        }
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }

    getTotal = () => {
        const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0)
        return total.toLocaleString(undefined, this.currencyOptions)
    }

    add = (product) => {
        this.setState((state) => ({
            cart: [...state.cart, product],
        }))
    }

    remove = (product) => {
        this.setState((state) => {
            const cart = [...state.cart];
            const productIndex = cart.findIndex(p => p.name === product.name)
            if(productIndex < 0) {
                return;
            }
            cart.splice(productIndex, 1);
            return ({
                cart
            })
        })
    }

    render(){
        return (
            <div className="wrapper">
                <div>
                    Shopping Cart: {this.state.cart.length} total items.
                </div>
                <div>
                    Total: {this.getTotal()}
                </div>
                <div className="products">
                    {products.map((product) => (
                        <div className="product" key={product.name}>
                            <span role="img" aria-label={product.name}>{product.emoji}</span>
                            <div className="button">
                                <button onClick={() => this.add(product)}>Add</button>
                                <button onClick={() => this.remove(product)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        )
    }
}