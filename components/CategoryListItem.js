import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Hoodie from '../assets/hoodie.png';

export default function (props) {
  const { category, onPress } = props;
  return (
    <TouchableOpacity 
      activeOpacity={0.3} 
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Image source={Hoodie} style={styles.categoryImage} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#e8d3ff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    margin: 16,
    marginTop: 8,
    marginBottom: 8
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: "200",
    fontSize: 23
  },
  categoryImage: {
    width: 64,
    height: 64
  }  
});