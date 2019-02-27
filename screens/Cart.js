import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import CartListItem from '../components/CartListItem';
import CartTotalPrice from '../components/CartTotalPrice';

export default class extends Component {
  static navigationOptions = {
    title: 'Cart'
  };

  render() {
    return(
      <View style={styles.container}>
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
        <CartTotalPrice style={styles.totalPrice} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8
  },
  totalPrice: {
    position: 'absolute',
    bottom: 0
  }
});