import React from 'react';
import { View, Text } from 'react-native';

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    };
  };

  render() {
    return (
      <View>
        <Text>Category</Text>
      </View>
    );
  }
}
