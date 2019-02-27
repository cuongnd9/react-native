import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      totalPrice: 0
    };
  }

  async addToCart(product) {
    let { cartItems } = this.state;
    cartItems = [...cartItems];

    const index = cartItems.findIndex(item => item.product.id === product.id);
    const quantity = index !== -1 ? cartItems[index].quantity + 1 : 1;

    quantity === 1 && cartItems.push({
      product,
      quantity
    });
    quantity !== 1 && cartItems[index].quantity++;
    
    await this.setState({
      cartItems
    });

    this.getTotalPrice(product);
  }

  async decreaseQuantity(product) {
    let { cartItems } = this.state;
    cartItems = [...cartItems];

    const index = cartItems.findIndex(item => item.product.id === product.id);
    const quantity = cartItems[index].quantity - 1;
    
    quantity > 0 && cartItems[index].quantity--;
    quantity === 0 && cartItems.splice(index, 1);

    await this.setState({
      cartItems
    });

    this.getTotalPrice(product);
  }

  async increaseQuantity(product) {
    let { cartItems } = this.state;
    cartItems = [...cartItems];

    const index = cartItems.findIndex(item => item.product.id === product.id);
    
    cartItems[index].quantity++;

    await this.setState({
      cartItems
    });

    this.getTotalPrice(product);
  }

  getTotalPrice() {
    const { cartItems } = this.state;
    const result =  cartItems.reduce((sum, item) => 
      sum + item.product.price * item.quantity, 0);
    
      this.setState({ totalPrice: result });
  }

  render() {
    return(
      <AppContext.Provider
        value={{
          cartItems: this.state.cartItems,
          totalPrice: this.state.totalPrice,
          addToCart: this.addToCart.bind(this),
          increaseQuantity: this.increaseQuantity.bind(this),
          decreaseQuantity: this.decreaseQuantity.bind(this),
          getTotalPrice: this.getTotalPrice.bind(this)
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}