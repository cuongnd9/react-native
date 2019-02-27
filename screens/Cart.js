import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import CartListItem from '../components/CartListItem';

export default class extends Component {
  static navigationOptions = {
    title: 'Cart'
  };

  render() {
    return(
      <View>
        <AppContext.Consumer>
          {
            ({ cartItems }) => {
              return (
                <FlatList 
                  data={cartItems}
                  renderItem={({item}) => {
                    return (
                      <CartListItem cartItem={item} />
                    );
                  }}
                  keyExtractor={item => item.product.id.toString()}
                />
              );
            }
              
          }
        </AppContext.Consumer>
      </View>
    );
  }
}