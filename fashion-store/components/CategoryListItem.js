import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Hoodie from '../assets/hoodie.png';

export default function (props) {
  return <View style={styles.container}>
    <Text style={styles.title}>Category Item</Text>
    <Image source={Hoodie} style={styles.categoryImage} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: "200",
    fontSize: 25
  },
  categoryImage: {
    width: 64,
    height: 64
  }  
});