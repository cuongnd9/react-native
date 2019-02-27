import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class extends Component {
  render() {
    const { cartItem } = this.props;
    const { product, quantity } = cartItem;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri:product.image }} />
        <View style={styles.mainSession}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>${product.price}</Text>
            <View style={styles.quantityRow}>
              <Icon
                name='minuscircleo'
                type='antdesign'
                color='blue'
                size={30}
              />
              <Text style={styles.quantity}>{quantity}</Text>
              <Icon
                name='pluscircleo'
                type='antdesign'
                color='blue'
                size={30}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    margin: 16,
    padding: 10
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 16
  },
  mainSession: {
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  priceRow: {
    flexDirection: 'row'
  },
  price: {
    flex: 1,
    fontSize: 36,
    fontWeight: '100',
    color: 'tomato'
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16
  },
  quantity: {
    fontSize: 30,
    paddingHorizontal: 10
  }
});