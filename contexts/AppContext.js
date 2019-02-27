import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }

  addToCart(product) {
    let { cartItems } = this.state;
    cartItems = [...cartItems];

    const index = cartItems.findIndex(item => item.product.id === product.id);
    const quantity = index !== -1 ? cartItems[index].quantity + 1 : 1;

    quantity === 1 && cartItems.push({
      product,
      quantity
    });
    quantity !== 1 && cartItems[index].quantity++;
    
    this.setState({
      cartItems
    });
  }


  render() {
    return(
      <AppContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart.bind(this)
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}