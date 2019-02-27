import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';

export default class extends Component {
  handlePress() {
    // TODO
  }

  render() {
    return (
      <View style={styles.container}>
        <AppContext.Consumer>
          {
            ({totalPrice}) => <Text style={styles.price}>${totalPrice}</Text>
          }
        </AppContext.Consumer>
        <Button title='Order Now' onPress={this.handlePress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c6cfff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    margin: 16,
    padding: 16
  },
  price: {
    color: 'tomato',
    fontSize: 36,
    fontWeight: '100',
    flex: 1
  }
});